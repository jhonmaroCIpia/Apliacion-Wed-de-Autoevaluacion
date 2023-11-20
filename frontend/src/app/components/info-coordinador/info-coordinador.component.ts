import { Component } from '@angular/core';
import { Rol } from 'src/app/interfaces/rol';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-info-coordinador',
  templateUrl: './info-coordinador.component.html',
  styleUrls: ['./info-coordinador.component.css']
})
export class InfoCoordinadorComponent {
  coordinador: Usuario = {id:0, nombre: '', apellido: '', genero: '', estudio: '', correo: '', contrasenia: ''};
  listRoles: Rol ={id: 1, descripcion: '14 horas', tipo: 'Coordinador'};
  id: number = 1004965;
  loading: boolean = false;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getCoordinador();
  }

  getCoordinador() {
    this.loading = true;
    this._usuarioService.getUsuario(this.id).subscribe((data: Usuario) => {
      this.coordinador = this.convertirUsuario(data);
    });
  }

  convertirUsuario(usuario: any): Usuario {
    let resultado: Usuario = ({
        id: usuario.USR_IDENTIFICACION,
        nombre: usuario.USU_NOMBRE,
        apellido: usuario.USU_APELLIDO,
        genero: usuario.USU_GENERO,
        estudio: usuario.USU_ESTUDIO,
        correo: usuario.USU_CORREO,
        contrasenia: usuario.USU_CONTRASENIA
      });
    return resultado;
  }

}
