import { Injectable } from '@angular/core';
import {Note} from "../models/note";

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  items: Note[] = []

  addNote(item: Note) {
    this.items.push(item)
  }

  getNote(id: number) {
    return this.items[id]
  }

  deleteNote(id: number) {
    this.items.splice(id, 1)
  }
  constructor() { }
}
