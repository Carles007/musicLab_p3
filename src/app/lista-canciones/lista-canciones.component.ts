import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Song } from '../song';
import { Songs } from '../mock-songs';
import { FilterPipe } from '../pipes/filter.pipe';


@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  songObj = new Songs();
  selectedSong?: Song;
  songList: Song[] = this.songObj.SONGS;

  sortBy: string = "name";
  filterSong = '';
  filterSong1 = '';
  filterSong2 = '';





  @Output() songEvent = new EventEmitter<Song>();


  constructor() { }



  ngOnInit(): void { }

  // get songs() {
  //   type ObjectKey = keyof typeof this.songList[0];
  //   const field = this.sortBy as ObjectKey;

  //   return this.songList.sort((a, b) => a[field] > b[field] ? 1 : -1);
  // }

  onSelect(song: Song): void {
    this.selectedSong = song;
    this.songEvent.emit(this.selectedSong);

  }

  nextSong(currentSong: Song): Song {   
    let nextSong = this.songList[0];
    
    for(let i of this.songList){
      if(i == currentSong){
        let index = this.songList.indexOf(i);
        console.log('NextSong');
        nextSong = this.songList[index+1]
      }
    }
    this.songEvent.emit(nextSong);
    this.onSelect(nextSong);
    return nextSong;

    
    
  }
}
