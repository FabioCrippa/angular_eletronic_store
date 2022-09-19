import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    //validações do formulário

    formContact = this.fb.group ({

      nome: ["", [
        Validators.minLength(4),
        Validators.required
      ]],

      assunto: ["", [
        Validators.minLength(10),
        Validators.required
      ]],
      
      telefone: ["", [
        Validators.minLength(11),
        Validators.required
      ]],
      
      email: ["", [
        Validators.minLength,
        Validators.required
      ]],

      mensagem: ["", [
        Validators.minLength(20),
        Validators.required
      ]],
      
    })

  constructor(

    private fb: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  sendForm() {
    window.alert("The message was successfully sent");
    this.formContact.reset();
  }

}
