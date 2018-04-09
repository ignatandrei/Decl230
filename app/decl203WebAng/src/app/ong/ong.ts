import { KeyValue } from '../keyvalue';

export interface IOng{
   denumire: string;
   registru: string;
     
}
export class Ong implements IOng{

  constructor(hd?: IOng) {
    if ( hd != null){
      for (const p in hd)
      {
        this[p] = hd[p];
      } 
    }
    this.details = [];
  }
    public denumire: string;
    public registru: string;
    details: KeyValue[];
  }