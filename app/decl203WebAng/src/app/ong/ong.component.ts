import { Component, OnInit, Inject, OnChanges, SimpleChanges, EventEmitter, Output, Input } from '@angular/core';
import { MessageService } from '../message.service';

import { ONGService } from './ong.service';
import { Ong } from './ong';
import 'rxjs/add/operator/finally';
import { Subscriber } from 'rxjs/Subscriber';
import { ExchangeDataService } from '../exchange-data.service';


@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit {


  @Output() onSelectedOng = new EventEmitter<Ong>();
  ongActive: boolean = true;
  tabONGLoaded: Ong[];
  tabActive: { [reg: string]: boolean };
  public ongList: Ong[];
  public term: string;
  public loadingTerm: string;
  public loading: boolean;
  constructor(private messageService: MessageService,
    private myService: ONGService,private ex:ExchangeDataService,
    @Inject('LOCALSTORAGE') private localStorage: any
    

  ) {
    this.ongList = [];
    if (this.localStorage != null) {
      this.term = this.localStorage.getItem("ongsearch");
    }
    this.loading = false;
    this.tabONGLoaded = [];
    this.tabActive = {};
    this.ex.OngConfirmed$.subscribe(it=>{
      this.SelectedOng = it;
    });

  }
  public selecteaza(ONG: Ong) {
   
    //this.onSelectedOng.emit(ONG);
    this.ex.confirmOng(ONG);
  }
  @Input()
  public SelectedOng: Ong = null;
  public get isSelectedOng(): boolean {
    return this.SelectedOng != null;
  }
  public numberONG: string;
  ngOnInit() {

    this.findTotalNumber();
  }
  findTotalNumber() {
    this.loading = true;
    this.myService
      .getCount()
      .finally(() => {
        console.log("acest finally merge");
        this.loading = false;

      })
      .subscribe
      (
      value => {
        this.numberONG = " Numar total ONG in baza de date:" + value.value;
        console.log('done', value);
      },
      error => {
        this.numberONG = "probabil ca nu sunteti conectat la internet";
        console.log('Error:', error);
      },

      () => {
        this.loading = false;
        console.log('NU SE CHEAMA PENTRU EROARE!');
      }


      );
  }
  findDetails(ong: Ong) {
    
    var exists = (this.tabONGLoaded.find(it => it.registru == ong.registru));
    if (exists != null) {
      this.tabActive[ong.registru] = true;
      return;
    }
    this.loadingTerm = ong.denumire;
    this.loading = true;
    this.myService.
      getDetails(ong.registru)
      .finally(() => {
        this.loading = false;
      })
      .subscribe(it => {

        const x = it.length;
        ong.details = it;

        this.tabActive[ong.registru] = true;
        this.tabONGLoaded.push(ong);

      });
  }
  closeTab(ong) {
    //this.tabONGLoaded= this.tabONGLoaded.filter(it=>it.registru != ong.registru);
    this.tabActive[ong.registru] = false;
    this.ongActive = true;
  }
  findADCES(){
    this.term='ASOCIATIA PENTRU DEZVOLTARE, CREATIVITATE SI EXCELENTA IN SOFTWARE';
    this.findOng();
  }
  findOng() {
    
    if (this.localStorage != null) {
      this.localStorage.setItem("ongsearch", this.term);
    }

    this.loadingTerm = this.term;
    this.loading = true;
    this.myService.getONG(this.term)
      .finally(() => {
        this.loading = false;
      })
      .subscribe(it => {

        this.ongList = it;

      }
      );


  }
}