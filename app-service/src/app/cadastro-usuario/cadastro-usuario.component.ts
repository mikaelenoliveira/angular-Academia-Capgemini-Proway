import { UsuarioService } from './../usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  constructor(private service: UsuarioService) { }



  save(dados: any):void{
    this.service.save(dados).subscribe(data => console.log(data))
  }
}
