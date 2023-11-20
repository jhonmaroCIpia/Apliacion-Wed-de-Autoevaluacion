import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//import { Docente } from '../../interfaces/docente';
import { Rol } from 'src/app/interfaces/rol';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-edit-usuario',
  templateUrl: './add-edit-usuario.component.html',
  styleUrls: ['./add-edit-usuario.component.css']
})
export class AddEditUsuarioComponent implements OnInit{
  rol: Rol[] = [{
    id: 1,
    descripcion: '16 horas',
    tipo: 'Planta tiempo completo'
  },
  {
    id: 2,
    descripcion: '18 horas',
    tipo: 'Ocasional tiempo completo'
  },
  {
    id: 3,
    descripcion: '14 horas',
    tipo: 'Ocasional medio tiempo'
  }];

  listGeneros: string[] = ['Masculino', 'Femenino', 'Otro'];
  form: FormGroup;
 // loading: boolean = true;
  id: number;
  operacion: string = 'Agregar ';
  password: string  = '';
  genre: string = '';
  user: any;
  //user2: Usuario = {id:0, nombre: '', apellido: '', genero: '', estudio: '', correo: '', contrasenia: ''};

  constructor(private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute, private _usuarioService: UsuarioService, private toastr: ToastrService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      id: [null, Validators.required],
      genero: ['', Validators.required],
      tipoDocentes: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      ultTituloAlcanzado: ['', Validators.required]
    }),
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getDocente(this.id);
    }
  }

  

  getDocente(id: number) {
   // this.loading = true;
    this._usuarioService.getUsuario(id).subscribe((data) => {
      data = this.convertirUsuarioInv(data);
      this.form.setValue({
        nombre: data.nombre,
        apellido: data.apellido,
        id: data.id,
        genero: data.genero,
        tipoDocentes: '',
        correo: data.correo,
        ultTituloAlcanzado: data.estudio,
      })
    })
  }

  addUsuario() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */
    this.password = this.form.value.id.toString();
    if (this.form.value.genero.includes("Masculino") || this.form.value.genero.includes("Femenino")) {
      this.genre = this.form.value.genero.charAt(0);
    }
    const usuario: Usuario = {
      id: this.form.value.id,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.genre,
      //tipoDocente: this.form.value.tipoDocente,
      estudio: this.form.value.ultTituloAlcanzado,
      correo: this.form.value.correo,
      contrasenia: this.password, 
    }
   // this.loading = true;

    console.log(usuario);
    this.user = this.convertirUsuario(usuario);
    if (this.id !== 0) {
      // Es editar 
      usuario .id = this.id;  
      this._usuarioService.updateUsuario(this.id, this.user).subscribe(() => {
        this.toastr.info('El usuario'+this.user.nombre+' fue actualizado con exito', 'Usuario actualizado');
        this.router.navigate(['/']);
      })
    }else {
      // Es agregar
      this._usuarioService.saveUsuario(this.user).subscribe(() => {
        this.toastr.success('El Usuario'+this.user.nombre+' fue registrado con exito', 'Usuario registrado');
        this.router.navigate(['/']);
      })
    }
  }

  convertirUsuario(usuario: Usuario): any {
    let resultado: any = ({
      USR_IDENTIFICACION: usuario.id,
      USU_NOMBRE: usuario.nombre,
      USU_APELLIDO: usuario.apellido,
      USU_GENERO: usuario.genero,
      USU_ESTUDIO: usuario.estudio,
      USU_CORREO: usuario.correo,
      USU_CONTRASENIA: usuario.contrasenia
      });
    return resultado;
  }

  convertirUsuarioInv(usuario: any): Usuario {
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
