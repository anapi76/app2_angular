import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() view:string='';
  //vista uno
  @Input() episodes: { name: string, episode: string }[] = [];
  //vista uno y dos
  @Input() photoModal: string = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
  @Input() nameModal: string = 'Rick Sanchez';
  //vista dos
  @Input() puntosAcumulados = 0;
  @Input() asistenciasAcumuladas: number = 0;
  @Input() rebotesAcumulados: number = 0;
  @Input() modal: string = '';
  //vista tres

  @Output() closeModal = new EventEmitter<string>();
  public onClose(): void {
    this.closeModal.emit('modal');
  }

}
