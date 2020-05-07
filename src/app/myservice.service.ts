import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  constructor(private ser:HttpClient) { }

up: Userdata;
  public getUser(){
    console.log("ins service get users");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this.ser.get("http://localhost:9918/user/getAllUsers",{ headers, responseType: 'json'});
  }

  public getUserById(username:string){
    console.log("ins service get users");
    const headers=new HttpHeaders().set('Content_Type','text/plain ;charset=utf-8');
    return this.ser.get("http://localhost:9999/customer/getUser/"+username,{ headers, responseType: 'json'});
  }
  

  public addUser(adduser: Userdata) {
    console.log("ins service add");
    console.log(adduser);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.post("http://localhost:9918/admin/addUser", adduser,  { headers, responseType: 'text'});
  }

  public update(up: Userdata) {
    this.up = up;
  }
  public updateMethod() {
    return this.up;
  }
  public onUpdate(updateuser: Userdata) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.put("http://localhost:9918/user/UpdateUser", updateuser,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.delete("http://localhost:9918/user/DeleteUser/" + id,  { headers, responseType: 'text'});
  }
  login(u:Userdata){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.ser.put("http://localhost:9918/admin/loginUser", u,  { headers, responseType: 'text'});
  }
}
export class Userdata{
  userid:number;
  username:string;
  usertype:string;
  userpassword:string;
  userphone:number;
  useremail:string;
}