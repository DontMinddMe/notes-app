import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotePageComponent } from './pages/note-page/note-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import {RouterModule} from "@angular/router";
import { NotesListPageComponent } from './pages/notes-list-page/notes-list-page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NotePageComponent,
    FormPageComponent,
    NotesListPageComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: NotesListPageComponent},
      { path: 'note/:noteId', component: NotePageComponent },
      { path: 'form', component: FormPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
