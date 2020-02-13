import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  usuarios: User[] = [];

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUser().subscribe(data => {
      this.usuarios = data;
    });
  }

}
