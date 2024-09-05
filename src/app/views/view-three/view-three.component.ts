import { Component } from '@angular/core';
import { PhotosComponent } from '../../components/photos/photos.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-view-three',
  standalone: true,
  imports: [PhotosComponent,ModalComponent],
  templateUrl: './view-three.component.html',
  styleUrl: './view-three.component.css'
})
export class ViewThreeComponent {

  public content: { tipo: string, data: { name: string, photo: string }[] }[] = [{
    tipo: "Verduras", data: [
      { name: "LECHUGA", photo: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/03/05/60421be64918d.jpeg" },
      { name: "BERENJENA", photo: "https://estaticos-cdn.prensaiberica.es/clip/7d08691e-b082-4540-ad4f-51dc14f8d23b_16-9-aspect-ratio_default_0.jpg" },
      { name: "CEBOLLA", photo: "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/10/02/morada-blanca-charlota-para-que-se-utiliza-cada-tipo-de-cebolla.jpeg" },
      { name: "TOMATE", photo: "https://static.eldiario.es/clip/73e21c3e-541d-4911-b3c4-ed2d64f3b164_16-9-aspect-ratio_default_0.jpg" },
      { name: "ZANAHORIA", photo: "https://s1.eestatic.com/2019/10/04/ciencia/nutricion/verduras-frutas-nutricion_434216860_134609502_1706x960.jpg" }
    ]
  }, {
    tipo: "Frutas", data: [
      { name: "PLATANO", photo: "https://s1.eestatic.com/2021/03/09/ciencia/nutricion/564704609_174935756_1706x960.jpg" },
      { name: "NARANJA", photo: "https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/naranjas_800x450.jpg?rev=b62ade22-d689-46b3-9aab-f52376e0c534&mw=660&hash=D52A46A597C765C56565652D0086F140" },
      { name: "MANZANA", photo: "https://cdn1.img.sputniknews.lat/img/07e6/0b/08/1132232783_0:257:2731:1793_1920x0_80_0_0_fdbda0e88e9a5ad09cdcc6a7a315c196.jpg" },
      { name: "PERA", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWc2SqzTiwf1tQ44hZKyJAomr7zLFVz4Vl7Q&usqp=CAU" },
      { name: "KIWI", photo: "https://as01.epimg.net/deporteyvida/imagenes/2018/07/14/portada/1531577760_565615_1531577889_noticia_normal.jpg" }
    ]
  }
  ];

  public type:number=0;
  public images: { name: string, photo: string }[] = this.content[0].data;
  public photo: string = '';
  public test: boolean = false;
  public name:string='';
  public modal: string = 'modal';
  public nameModal: string = '';
  public photoModal: string ='';

  public onClick(content: { tipo: string, data: { name: string, photo: string }[] },i:number): void {
    this.images = content.data;
    this.type=i;
    this.test=false;
  }

  public onPhoto(data: { photo: string,test:boolean,index:number}): void {
    this.photo = data.photo;
    this.test=data.test;
    this.nameModal=this.content[this.type].data[data.index].name;
  }

  public onModal(data1:{photo:string}):void{
    this.photoModal=data1.photo;
    this.modal = 'modal show-modal';
  }

 public onClose(modal: string): void {
    this.modal = modal;
  } 

}
