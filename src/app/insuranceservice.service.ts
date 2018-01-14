import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class InsuranceserviceService {

  constructor(private _http:HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getOrders(url: string): Observable<any> {
    return this._http.get(url)
      .map((response: Response) => <any>response.json())
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  createOrders(url: string, model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this._http.post(url, body, this.httpOptions)
      .map((response: Response) => <any>response.json())  
      .catch(this.handleError);
  }

  createFood(url: string, model: any) {
    let body = JSON.stringify(model);
    let response = this._http.post(url, body, this.httpOptions);
    return response;
   }

  put(url: string, id: number, model: any): Observable<any> {
    let body = JSON.stringify(model);
    return this._http.put(url+id, body, this.httpOptions)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  delete(url: string, id: number): Observable<any> {
    return this._http.delete(url+id,this.httpOptions)
      .map((response: Response) => <any>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error|| 'Server error');
  }

}
