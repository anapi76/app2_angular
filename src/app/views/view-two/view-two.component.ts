import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { DataService } from '../../services/data.service';
import { Datum} from '../../models/response.interfacePlayer';


@Component({
  selector: 'app-view-two',
  standalone: true,
  imports: [CardComponent, ModalComponent],
  templateUrl: './view-two.component.html',
  styleUrl: './view-two.component.css'
})
export class ViewTwoComponent {

  public constructor(public service: DataService) { }

  public players: Datum[] = [];
  public urlApiPlayers = "https://www.balldontlie.io/api/v1/players/?per_page=100&page=";
  public page: number = 1;
  public nextPage: null | number = 1;
  //variables que necesito para cargar la página y que pasarán al componente card con @Input
  public photo: string = 'https://graffica.info/wp-content/uploads/2017/08/NBA-logo-png-download-free-1200x675.png';
  public name: string = '';
  public status_id: number = 0;
  //variables que necesita la pantalla modal por @Input
  public nameModal: string = '';
  public modal: string = 'modal';
  public puntosAcumulados: number = 0;
  public asistenciasAcumuladas: number = 0;
  public rebotesAcumulados: number = 0;
  public view:string='view2';

  public urlApiStats = "https://www.balldontlie.io/api/v1/stats/?player_ids[]=";

  //función para sacar el array de todos los jugadores por páginas
  public getPlayers(): void {
    this.service.getApiPlayers(this.urlApiPlayers + this.page).subscribe(response => {
      this.nextPage = response.meta.next_page;
      this.players=response.data;
    })
  }

  //función que saca los puntos, los rebotes y las asistencias acumuladas de un jugador
  public getPlayerStats(url: string): void {
    this.service.getApiPlayerStats(url).subscribe(response => {
      response.data.map((element => {
        if (element.pts !== null) {
          this.puntosAcumulados += element.pts;
        }
        if (element.reb !== null) {
          this.rebotesAcumulados += element.reb;
        }
        if (element.ast !== null) {
          this.asistenciasAcumuladas += element.ast;
        }
      }))
      if (response.meta.next_page !== null) {
        this.getPlayerStats(url + '&page=' + response.meta.next_page);
      }
    })
  }

  //Función para avanzar o retroceder páginas
    public onClick(cont: number): void {
    this.page += cont;
    if (this.nextPage == null) {
      this.page = this.page - 1;
    }
    if (this.page == 0) {
      this.page = 1;
    }
    this.players = [];
    this.getPlayers();
  }

  //función para mostrar la pantalla modal
  public onModal(data: { name: string, photo: string, id: number|string }): void {
    this.puntosAcumulados = 0;
    this.rebotesAcumulados = 0;
    this.asistenciasAcumuladas = 0;
    this.getPlayerStats("https://www.balldontlie.io/api/v1/stats/?player_ids[]=" + data.id);
    this.nameModal = data.name;
    this.photo = data.photo;
    this.modal = 'modal show-modal';
  }

  //función para cerrar la pantalla modal
  public onClose(modal: string): void {
    this.modal = modal;
  }

  ngOnInit(): void {
    this.getPlayers();
  }

}