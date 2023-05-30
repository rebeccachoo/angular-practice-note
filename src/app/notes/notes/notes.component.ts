import { Component, OnInit } from "@angular/core";
import { NoteService } from "../../note.service";
import { Note } from "../../notes";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
})
export class NotesComponent implements OnInit {
  notes: Note[] | undefined;
  constructor(private noteService: NoteService) {}
  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
    console.log(this.notes);
  }
  delete() {}
}
