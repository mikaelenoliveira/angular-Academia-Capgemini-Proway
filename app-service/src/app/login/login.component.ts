import { UsuarioService } from './../usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: UsuarioService) { }
logar(dados:any):void{
  this.service.logar(dados).subscribe(data => {
    //transforma objeto em observable em string json
    let token = JSON.stringify(data)

    //transforma string json em objeto javascript
    let obj = JSON.parse(token)

    localStorage.setItem('usertoken', obj.token)
    window.history.back()
  })

}

}
