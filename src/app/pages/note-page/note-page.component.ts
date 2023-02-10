import {Component, Input, OnInit} from '@angular/core';
import { Note } from "../../models/note";
import {NotesServiceService} from "../../services/notes-service.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent implements OnInit{
  constructor(
    private notesService: NotesServiceService,
    private route: ActivatedRoute
    ) {
  }
  noteIndex: number
  note: Note
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.noteIndex = Number(routeParams.get('noteId'));
    this.note = this.notesService.items[this.noteIndex];
  }

}
