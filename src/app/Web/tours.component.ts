import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "tours-web",
    templateUrl: "./tours.component.html",
    styleUrls: ["./tours.component.css"]
})
export class ToursWebComponent {

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}