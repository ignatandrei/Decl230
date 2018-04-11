import { environment } from '../../environments/environment';
import { Ong, IOng } from './ong';
import { MessageService } from '../message.service';
import { KeyValue } from '../keyvalue';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RequestOptions, ResponseContentType } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Persoana } from '../dateproprii/persoana';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ONGService {

  private infoONG: string = 'api/ong/FindOng/';
  private infoDetailsONG: string = 'api/ong/FindDetailsOng/';
  private info203: string = 'api/ong/Make203/';
  private infoCount: string = 'api/ong/CountData/asociatii';
  constructor(private http: HttpClient, private messageService: MessageService) {
          
  }
  
  make203(registruOng:string, pers:Persoana):Observable<KeyValue>{
    

    const url = environment.urlAPI +  this.info203 ;
     return this.http
       .post<KeyValue>(url,{"registruOng" : registruOng , "pers": pers}, httpOptions)
       
       .map(it=>{
         it.value= environment.urlAPI +  this.info203 + it.key;
         return it;
        });
       ;

  

  }

  getONG(find: string): Observable<Ong[]> {

    const url = environment.urlAPI +  this.infoONG ;
    
    
    this.messageService.add('fetched ONG from ' + url);
    return this.http
      .post<IOng[]>(url,{"registru" : find}, httpOptions)
      .map(it=>it.map(t=>new Ong(t)));
        
  }
  getCount():Observable<KeyValue>{
    const url = environment.urlAPI +  this.infoCount ;
    
    this.messageService.add('number data ' + url);
    return this.http
      .get<KeyValue>(url, httpOptions);
      

  }
  getDetails(find: string): Observable<KeyValue[]> {
    var url = this.infoDetailsONG ;
    url = environment.urlAPI + url;
    this.messageService.add('fetched ONG from ' + url);
    return this.http.post<KeyValue[]>(url, {"registru":find});

  }
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     this.messageService.add('enterpriseService:error! ' + error);

  //     this.log(`${operation} failed: ${error.message}`);

  //     return of(result as T);
  //   };
  // }

  
  // private log(message: string) {
  //   this.messageService.add('enterpriseService: ' + message);
  // }
}
