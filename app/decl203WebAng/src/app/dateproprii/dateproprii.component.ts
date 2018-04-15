import { Component, OnInit, Inject, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Persoana } from './persoana';
import { MessageService } from '../message.service';
import { ExchangeDataService } from '../exchange-data.service';


@Component({
  selector: 'app-dateproprii',
  templateUrl: './dateproprii.component.html',
  styleUrls: ['./dateproprii.component.css']
})

export class DatepropriiComponent implements OnInit, OnChanges {
  constructor(@Inject('LOCALSTORAGE') private localStorage: any, private messageService: MessageService, private ex:ExchangeDataService) {
    this.pers = new Persoana();
  }

  @Output() onPersoanaSelected = new EventEmitter<Persoana>();

  pers: Persoana;
  public get isValid(): boolean {
    return this.pers.isValid;
  }
  public get DeCompletat(): string {
    return this.pers.DeCompletat;
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log('ng on changes ' );
   
  }
  saveChanges(proName: string) {
    //console.log('save changes' + proName);
    if (this.localStorage) {      
      //console.log('local storage start ' + proName);
      localStorage.setItem(proName, this.pers[proName]);      
      //console.log('local storage end ' + proName);
    }
    //this.onPersoanaSelected.emit(this.pers);
  }

  ngOnInit() {
    
    this.pers.nume = localStorage.getItem("nume");
    this.pers.prenume = localStorage.getItem("prenume");
    this.pers.initialatatalui = localStorage.getItem("initialatatalui");
    this.pers.strada = localStorage.getItem("strada");
    this.pers.numar = localStorage.getItem("numar");
    this.pers.bloc = localStorage.getItem("bloc");
    this.pers.scara = localStorage.getItem("scara");
    this.pers.etaj = localStorage.getItem("etaj");
    this.pers.ap = localStorage.getItem("ap");
    this.pers.judet = localStorage.getItem("judet");
    this.pers.localitate = localStorage.getItem("localitate");
    this.pers.codpostal = localStorage.getItem("codpostal");
    this.pers.cnp = localStorage.getItem("cnp");
    this.pers.email = localStorage.getItem("email");
    this.pers.telefon = localStorage.getItem("telefon");
    this.pers.fax = localStorage.getItem("fax");


    //this.onPersoanaSelected.emit(this.pers);
  }
  doneInput() {
    //console.log('start');
        
    localStorage.setItem("nume", this.pers.nume);
     localStorage.setItem("prenume",this.pers.prenume );
     localStorage.setItem("initialatatalui",this.pers.initialatatalui);
     localStorage.setItem("strada",this.pers.strada);
      localStorage.setItem("numar", this.pers.numar);
     localStorage.setItem("bloc",this.pers.bloc);
     localStorage.setItem("scara",this.pers.scara);
     localStorage.setItem("etaj",this.pers.etaj);
     localStorage.setItem("ap",this.pers.ap );
     localStorage.setItem("judet",this.pers.judet);
     localStorage.setItem("localitate",this.pers.localitate);
     localStorage.setItem("codpostal",this.pers.codpostal);
     localStorage.setItem("cnp",this.pers.cnp);
     localStorage.setItem("email",this.pers.email);
     localStorage.setItem("telefon",this.pers.telefon);
      localStorage.setItem("fax",this.pers.fax);
      this.messageService.add("emit persoana");
    //this.onPersoanaSelected.emit(this.pers);
      this.ex.confirmPersoana(this.pers);
    //console.log('end');
  }

}
