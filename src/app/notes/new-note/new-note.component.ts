import { Component } from "@angular/core";
import { NoteService } from "../../note.service";

@Component({
  selector: "app-new-note",
  templateUrl: "./new-note.component.html",
  styleUrls: ["./new-note.component.scss"],
})
export class NewNoteComponent {
  panelOpenState = false;
  title = "";
  content = "";

  constructor(private noteService: NoteService) {}

  submit(): void {
    this.noteService.addNote({ title: this.title, content: this.content });
  }
}
