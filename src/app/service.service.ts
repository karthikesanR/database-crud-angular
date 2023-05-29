import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url="http://localhost:3000/get"
  constructor(private http:HttpClient) { }

  getStudent(){
    return this.http.get(this.url)
  }
}
