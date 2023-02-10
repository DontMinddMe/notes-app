import {Component, OnInit} from '@angular/core';
import {Note} from "../../models/note";
import {NotesServiceService} from "../../services/notes-service.service";


@Component({
  selector: 'app-notes-list-page',
  templateUrl: './notes-list-page.component.html',
  styleUrls: ['./notes-list-page.component.scss']
})
export class NotesListPageComponent implements OnInit{
  constructor(private notesService: NotesServiceService) {
  }
  items: Note[] = []
  ngOnInit(): void {
    this.items = this.notesService.items
  }


}
