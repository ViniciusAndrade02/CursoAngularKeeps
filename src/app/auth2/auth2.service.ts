import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
  kind:string;
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string
}

@Injectable({
  providedIn:'root'

})

export class AuthService {

  constructor(private http:HttpClient){}

  signup(email: string, password: string ) {

    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAyDSwXeN-k9fG-s3wL-z6Kod6xCPGrOkI', {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }
}