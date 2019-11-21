import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required]),
      mensagem: this.formBuilder.control('', [Validators.required])
    })
  }

  onSubmit(){
    console.log(this.formulario.value)
    alert(`Olá ${this.formulario.value.nome}. A mensagem: "${this.formulario.value.mensagem}", foi enviada com sucesso !`)
  }

}
