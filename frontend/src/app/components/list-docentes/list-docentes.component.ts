import { Component } from '@angular/core';

//import { Docente } from '../../interfaces/docente';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Rol } from '../../interfaces/rol';


@Component({
  selector: 'app-list-docentes',
  templateUrl: './list-docentes.component.html',
  styleUrls: ['./list-docentes.component.css']
})
export class ListDocentesComponent {
  listDocentes: Usuario[] = [];
  listRoles: Rol[] = [{id: 1, descripcion: '14 horas', tipo: 'Planta tiempo completo'}];

  constructor(private _usuarioService: UsuarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListDocentes();
  
  }

  getListDocentes() {
    this._usuarioService.getUsuarios().subscribe((data: Usuario[]) => {
      this.listDocentes = this.convertirUsuarios(data);
      console.log(this.listDocentes);
    });
  }

  deleteDocente(id: number) {
    this._usuarioService.deleteUsuario(id).subscribe(() => {
      this.getListDocentes();
      this.toastr.warning('El usuario fue eliminado con exito', 'Usuario eliminado');
    })
  }

  convertirUsuarios(usuarios: any): Usuario[] {
    let resultado: Usuario[]= [];
    for (let usuario of usuarios) {
      resultado.push({
        id: usuario.USR_IDENTIFICACION,
        nombre: usuario.USU_NOMBRE,
        apellido: usuario.USU_APELLIDO,
        genero: usuario.USU_GENERO,
        estudio: usuario.USU_ESTUDIO,
        correo: usuario.USU_CORREO,
        contrasenia: usuario.USU_CONTRASENIA
      });
    }
    return resultado;
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
