import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-docente',
  templateUrl: './add-edit-docente.component.html',
  styleUrls: ['./add-edit-docente.component.css']
})
export class AddEditDocenteComponent implements OnInit{
  form: FormGroup;
  loading: boolean = true;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      id: [null, Validators.required],
      tipoDocentes: [null, Validators.required],
      correo: [null, [Validators.required, Validators.email]],
      ultTituloAlcanzado: [null, Validators.required],
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
    this.loading = true;

  }

  addDocente() {
  }
}
