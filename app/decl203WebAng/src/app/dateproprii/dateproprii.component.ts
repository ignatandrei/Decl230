import { Component, OnInit, Inject, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Persoana } from './persoana';


@Component({
  selector: 'app-dateproprii',
  templateUrl: './dateproprii.component.html',
  styleUrls: ['./dateproprii.component.css']
})

export class DatepropriiComponent implements OnInit, OnChanges {
  constructor(@Inject('LOCALSTORAGE') private localStorage: any) {
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

    if (this.localStorage) {
      localStorage.setItem("nume", this.pers.nume);
      localStorage.setItem("prenume", this.pers.prenume);
    }
  }
  saveChanges(proName: string) {
    localStorage.setItem(proName, this.pers[proName]);
    this.onPersoanaSelected.emit(this.pers);
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


    this.onPersoanaSelected.emit(this.pers);
  }

}
