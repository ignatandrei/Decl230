import { Component , ViewChild} from '@angular/core';
import {ClrWizard} from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { Ong } from './ong/ong';
import { Persoana } from './dateproprii/persoana';
import { ONGService } from './ong/ong.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { interval } from 'rxjs/observable/interval';
enum Completion230 {
  None           = 0,
  ONG       = 1 << 0,
  Persoana         = 1 << 1,
  All = ~(~0 << 2)
}

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
    const b=this.SelectedOng != null;
    console.log('exist ong' +b);
    return b;
  }
  onSelectedOng(ONG:Ong){
    this.SelectedOng=ONG;        

  }
  onPersoanaSelected(pers:Persoana){
    this.SelectedPers=pers;
      
  }
  
  get IsCompletedPers(){
    const b=(this.SelectedPers != null && this.SelectedPers.isValid);
    console.log("completed " + b)
    return b;
  }
  get OngNecompletat():boolean{

    return !this.existOng;
  }
  get PersNecompletat():boolean{
    if(this.OngNecompletat)
      return false;

    if(!this.IsCompletedPers)
      return true;

    return false;
  }

  get PoateSaGenereze():boolean{

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
