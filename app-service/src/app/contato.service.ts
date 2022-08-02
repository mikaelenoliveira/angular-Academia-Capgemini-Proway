import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http:HttpClient) { }

  getContatos(){
    return this.http.get(`${environment.BASE_URL}contatos`)
  }

  getUmContato(id:number){
    return this.http.get(`${environment.BASE_URL}contatos/${id}`)

  }

  save(data:any){
    return this.http.post(`${environment.BASE_URL}contatos`, data)
  }

  alterarContato(dados: any){
    return this.http.put(`${environment.BASE_URL}contatos/${dados.id}`, dados)
  }
}


