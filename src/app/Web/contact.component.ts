import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "contact-web",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"]
})
export class ContactWebComponent {

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

}