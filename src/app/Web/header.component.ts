import {  DOCUMENT} from '@angular/common';
import { Component, EventEmitter, Inject, Output, OnDestroy} from "@angular/core";
import {  TranslateService} from "@ngx-translate/core";
import * as $ from "jquery";

@Component({
  selector: "header-web",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderWebComponent implements OnDestroy {
  public mostrar: boolean = true;

  @Output() dataEvent = new EventEmitter();

  constructor(private translate: TranslateService, @Inject(DOCUMENT) private document: Document) {

  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.dataEvent.emit(lang);
  }

  home() {
    this.document.location.href = '/#/home';
    //window.location.reload();
  }
  ocultar(value) {
    this.mostrar = value;
  }
  ngOnDestroy(): void {
    console.log("Ondestroy ejecutado")
  }
  movePage(el: HTMLElement) {
    el.scrollIntoView();
  }
  // desplazamiento(){
  // }
  // aboutus(){
  //     this.document.location.href = '/#/aboutus';
  //     //window.location.reload();
  // }

  // rooms(){
  //     this.document.location.href = '/#/rooms';
  //     //window.location.reload();
  // }

  // gallery(){
  //     this.document.location.href = '/#/gallery';
  //     //window.location.reload();
  // }

  // contact(){
  //     this.document.location.href = '/#/contact';
  //     //window.location.reload();
  // }

}
