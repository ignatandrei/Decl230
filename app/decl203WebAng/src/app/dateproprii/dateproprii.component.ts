import { Component, OnInit, Inject, OnChanges, SimpleChanges, Output ,EventEmitter} from '@angular/core';
import { Persoana } from './persoana';


@Component({
  selector: 'app-dateproprii',
  templateUrl: './dateproprii.component.html',
  styleUrls: ['./dateproprii.component.css']
})

export class DatepropriiComponent implements OnInit, OnChanges {
  constructor(@Inject('LOCALSTORAGE') private localStorage: any) { 
    this.pers=new Persoana();
  }

  @Output() onPersoanaSelected=new EventEmitter<Persoana>();
  
  pers:Persoana;
  public get isValid():boolean
    {
      return this.pers.isValid;
    }
  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.localStorage){
      localStorage.setItem("nume", this.pers.nume);  
      localStorage.setItem("prenume", this.pers.prenume);  
    }
  }
  saveChanges(proName:string){
    localStorage.setItem(proName, this.pers[proName]);    
   this.onPersoanaSelected.emit(this.pers);
  }

  ngOnInit() {
    this.pers.nume=localStorage.getItem("nume");
    this.pers.prenume=localStorage.getItem("prenume");
    this.onPersoanaSelected.emit(this.pers);
  }

}
