import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { SongComponent } from './song/song.component';
import { SongDetailComponent } from './song-detail/song-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
