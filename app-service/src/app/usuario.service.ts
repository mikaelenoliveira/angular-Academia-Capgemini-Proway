import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  jwt_decode  from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  save(dados:any){
    return this.http.post('http://localhost:8080/usuarios', dados)

  }

  logar(dados:any){
    return this.http.post('http://localhost:8080/usuarios/login', dados)
  }

  getDadosToken(){
    var token = localStorage.getItem('usertoken') || ''
    if(token !== ''){
      var bodyToken = jwt_decode(token)
      var tokenjson = JSON.stringify(bodyToken)
      var tokenDecodificado = JSON.parse(tokenjson)
      return tokenDecodificado
    }
    return ''

  }
}
