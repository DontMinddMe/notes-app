import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import {NotesServiceService} from "../../services/notes-service.service";
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private notesService: NotesServiceService,
    private router: Router
  ){}

  onSubmit(form: NgForm){
    this.notesService.addNote(form.value)
    this.router.navigateByUrl('')
  }
}
