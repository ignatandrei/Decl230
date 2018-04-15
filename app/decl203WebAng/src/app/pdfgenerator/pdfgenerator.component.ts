import { Component, OnInit } from '@angular/core';
import { ONGService } from '../ong/ong.service';
import { Persoana } from '../dateproprii/persoana';
import { Ong } from '../ong/ong';
import { MessageService } from '../message.service';
import { ExchangeDataService } from '../exchange-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdfgenerator',
  templateUrl: './pdfgenerator.component.html',
  styleUrls: ['./pdfgenerator.component.css']
})
export class PdfgeneratorComponent{
  public loading: boolean;
  SelectedPers: Persoana;
  SelectedOng: Ong;
  constructor(private ongService: ONGService, private messageService: MessageService, private ex: ExchangeDataService,
  private router:Router) {
    this.ex.OngConfirmed$.subscribe(it => {
      this.messageService.add("selected ong in pdf gen");
      this.existOng = true;
      this.SelectedOng = it;
     

    });
    this.ex.PersoanaConfirmed$.subscribe(it => {
      this.messageService.add("selected pers in pdf gen");
      this.IsCompletedPers = it.isValid;
      this.SelectedPers = it;
     
    });
  }
  IsCompletedPers = false;
  existOng = false;
  gotoPers():void{
    this.messageService.add("goto pers");
    this.router.navigate(['/pers']);
  
  }
  gotoOng():void{
    this.router.navigate(['/ong']);
  }
  result="";
  genereaza(){
    this.loading=true;
    this.result="";    
    this.ongService.make203(this.SelectedOng.registru,this.SelectedPers)
    .finally(()=>this.loading=false)
    .subscribe(
      it=>{
        
        this.result=it.value;
        
        
      }
    );
  }
}
