import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "home-web",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeWebComponent {

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}