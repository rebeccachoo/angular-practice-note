import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatExpansionModule } from "@angular/material/expansion";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SearchComponent } from "./search/search/search.component";
import { NotesComponent } from "./notes/notes/notes.component";
import { NewNoteComponent } from "./notes/new-note/new-note.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NotesComponent,
    NewNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatExpansionModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
