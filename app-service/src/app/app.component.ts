import { UsuarioService } from './usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-service';

  userLogado:any = this.UsuarioService.getDadosToken()
  constructor(private UsuarioService: UsuarioService) {
  }

  logout():void{
    localStorage.removeItem('usertoken')
    this.userLogado = ''
    window.location.reload()
  }
}
