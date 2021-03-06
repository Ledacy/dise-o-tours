import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "home-web",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeWebComponent {
    public id: string;
    constructor(private translate: TranslateService){

    }
    setLanguage(lang: string){
        this.translate.use(lang);
    }
    move(el: HTMLElement){
        el.scrollIntoView();
    }
}