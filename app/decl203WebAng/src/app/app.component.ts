import { Component , ViewChild} from '@angular/core';
import {ClrWizard} from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { Ong } from './ong/ong';
import { Persoana } from './dateproprii/persoana';
import { ONGService } from './ong/ong.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  SelectedPers: Persoana;
  SelectedOng: Ong;
  constructor( private ongService:ONGService){
    
  }
  get existOng(){
    return this.SelectedOng != null;
  }
  onSelectedOng(ONG:Ong){
    this.SelectedOng=ONG;
  }
  onPersoanaSelected(pers:Persoana){
    this.SelectedPers=pers;
  }
  get IsCompletedPers(){
    return (this.SelectedPers != null && this.SelectedPers.isValid);
  }
  get PoateSaGenereze(){

    return this.IsCompletedPers && this.existOng;

  } 
  result:string;
  genereaza(){
    this.result="";    
    this.ongService.make203(this.SelectedOng.registru,this.SelectedPers).subscribe(
      it=>{
        console.log(it.value);
        this.result=it.value;
        interval(1000*60*5).subscribe(it=>console.log(it));
        
      }
    );
  }
}
