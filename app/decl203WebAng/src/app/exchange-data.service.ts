import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Ong } from './ong/ong';
import { Persoana } from './dateproprii/persoana';


@Injectable()
export class ExchangeDataService {

  constructor(private messageService: MessageService) { }

  private OngSource = new ReplaySubject<Ong>();
  private persoanaSource = new ReplaySubject<Persoana>();

  OngConfirmed$ = this.OngSource.asObservable();
  PersoanaConfirmed$ = this.persoanaSource.asObservable();

  confirmPersoana(p:Persoana){

    this.persoanaSource.next(p);
    
  }

  // public pers:Persoana;
  // public ong:Ong;

  confirmOng(o:Ong){
    this.OngSource.next(o);
  }

}
