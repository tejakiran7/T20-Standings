import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tabledata } from './interface';

@Injectable({
  providedIn: 'root'
})
export class T20ServiceService {
    constructor(private _http:HttpClient) { }
   private _Url = "http://localhost:3000";

  teamgroupa():Observable<Tabledata[]> {
   return this._http.get<Tabledata[]>(`${this._Url}/teamDataGRA`)
   .pipe(catchError(this.errorhandler));
  }

  errorhandler(error:HttpErrorResponse) {
   return throwError(error.message ||"unknown error occured");
  }

  teamgroupb():Observable<Tabledata[]>{
    return this._http.get<Tabledata[]>(`${this._Url}/teamDataGRB`)
    .pipe(catchError(this.errorhandler));
  }
  teamgroup1():Observable<Tabledata[]>{
    return this._http.get<Tabledata[]>(`${this._Url}/teamDataGR1`)
    .pipe(catchError(this.errorhandler));
  }
  teamgroup2():Observable<Tabledata[]>{
    return this._http.get<Tabledata[]>(`${this._Url}/teamDataGR2`)
    .pipe(catchError(this.errorhandler));
  }
  
}
