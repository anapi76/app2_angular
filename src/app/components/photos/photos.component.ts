import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {

  @Input() test: boolean = false;
  @Input() photo: string = '';
  @Input() name:string='';
  @Input() images: { name: string, photo: string }[] = [];
  @Input() view:string='';

  @Output() data = new EventEmitter<{ photo: string,test:boolean,index:number }>();
  public onPhoto(photo: string,i:number): void {
    this.data.emit({ photo: photo,test:true,index:i });
  }

  @Output() data1=new EventEmitter<{ photo: string }>();
  public onModal():void{
    this.data1.emit({photo: this.photo,});
  }

}
