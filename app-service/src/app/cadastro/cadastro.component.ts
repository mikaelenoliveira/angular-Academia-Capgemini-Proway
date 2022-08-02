import { Component } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private service: ContatoService) { }

   msg: string = ""
  saveContato(data:any){
    this.service.save(data).subscribe(data => this.msg = "Contato salvo com sucesso")
  }

}
