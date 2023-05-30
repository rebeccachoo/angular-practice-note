// import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { notes, Note } from "./notes";

@Injectable({
  providedIn: "root",
})
export class NoteService {
  notes: Note[] = notes;
  constructor() {}

  addNote(note: Note) {
    this.notes.push(note);
  }
  getNotes() {
    return this.notes;
  }
  clearNote() {
    this.notes = [];
    return this.notes;
  }
}
