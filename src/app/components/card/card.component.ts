import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //vista uno y dos
  @Input() status_id: number|string = '';
  @Input() photo: string = '';
  @Input() name: string = '';

  //vista dos
  @Output() data = new EventEmitter<{ name: string, photo: string, id: number|string }>();
  
  public onModal(): void {
    this.data.emit({ name: this.name, photo: this.photo, id: this.status_id });
  }

}
