import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

import { DataService } from '../../services/data.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { Result } from '../../models/response.interface';
import { ResponseEpisode } from '../../models/responseEpisode.interface';


@Component({
  selector: 'app-view-one',
  standalone: true,
  imports: [CardComponent, ModalComponent],
  templateUrl: './view-one.component.html',
  styleUrl: './view-one.component.css'
})
export class ViewOneComponent {

  public constructor(public service: DataService) { }

  //declaro las variables que necesito para buscar en la API por personajes
  public urlApiCharacter: string = "https://rickandmortyapi.com/api/character/";
  public page: number = 1;
  public totalPages: number = 1;
  public characters: Result[] = [];
  public name: string = 'rick';
 
  //declaro las variables que pasaré al componente modal con @Input
  public nameModal: string = '';
  public photoModal: string = '';
  public modal: string = 'modal';
  public view: string = 'view1';

  public episodes: ResponseEpisode[] = [];
  
  //función para sacar los personajes que hay en una página
  public getCharacters(name: string): void {
    this.service.getApiResponse(this.urlApiCharacter + "?page=" + this.page + "&name=" + name).subscribe(response => {
      this.characters = response.results;
      this.totalPages = response.info.pages;
    })
  }

  //función que muestra los episodios de cada personaje que necesita la pantalla modal
  public getEpisodes(episodes: string[]): void {
    this.episodes = []
    episodes.map((element => {
      this.service.getApiResponseEpisode(element).subscribe(response => {
        this.episodes.push(response);
      })
    }))
  }

  //función para página siguiente o anterior
  public onClick(cont: number): void {
    this.page += cont;
    if (this.page == 0) {
      this.page = this.totalPages;
    }
    else if (this.page == this.totalPages + 1) {
      this.page = 1;
    }
    this.characters = [];
    this.getCharacters(this.name);
  }

  //función para abrir la pantalla modal
  public onModal(i: number): void {
    this.getEpisodes(this.characters[i].episode);
    this.nameModal = this.characters[i].name;
    this.photoModal = this.characters[i].image;
    this.modal = 'modal show-modal';
  }

  //cerrar la pantalla modal
  public onClose(modal: string): void {
    this.modal = modal;
  }

  //iniciar aplicación
  ngOnInit() {
    this.getCharacters(this.name);
  }

}