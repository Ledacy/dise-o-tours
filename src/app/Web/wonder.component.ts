import { Component, ElementRef, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import * as $ from 'jquery';

@Component({
    selector: "wonder-web",
    templateUrl: "./wonder.component.html",
    styleUrls: ["./wonder.component.css"]
})
export class WonderWebComponent implements OnInit{

    constructor(private translate: TranslateService){

    }
    loadAPI: Promise<any>

    setLanguage(lang: string){
        this.translate.use(lang);
    }

    ngOnInit():void {
      // estilos para la ruleta
      $(function(){
        let current_view = 0;
        let count_views = $('.ruleta .pantalla li').length;

        // Methodes
        let switch_view = function(id){
            if(id >= 0  &&  id <= count_views)
                current_view = id;
            update_view();
        };
        let init_pagination = function() {
            for(let i=0; i<count_views; i++) {
                let page = $('<li/>');
                $(page).click(function() {switch_view(i);});
                $('.ruleta .marca').append(page);
            }
        };
        let update_view = function(){
            // Calculate the current state
            let view0 = current_view;
            let view1 = current_view+1;
            let view2 = current_view+2;
            if(view0 <= 0) view0 = count_views;
            if(view2 > count_views) view2 = 1;
            $('.ruleta .pantalla li').removeClass('left right');
            $('.ruleta .pantalla li, .ruleta .marca li').removeClass('active');
            $('.ruleta .pantalla li:nth-child('+view1+')').addClass('active');
            $('.ruleta .pantalla li:nth-child('+view0+')').addClass('left');
            $('.ruleta .pantalla li:nth-child('+view2+')').addClass('right');
            $('.ruleta .marca li:nth-child('+view1+')').addClass('active');
        };
        $('.ruleta .pantalla li').click(function(e){
            let classes = $(e.target).attr('class');
            if(classes.includes('left')) {
                if(current_view==0)
                    current_view = count_views-1;
                else
                    current_view--;
            }
            else if(classes.includes('right')) {
                if(current_view == (count_views-1))
                    current_view = 0;
                else
                    current_view++;
            }
            update_view();
        });

        init_pagination();
        update_view();
      });

      // fin de los estilos para el ruleta
        this.loadAPI = new Promise((resolve) => {
            this.loadScript();
            resolve(true);
        });
        }
        public loadScript() {
            var isFound = false;
            var scripts = document.getElementsByTagName("script")
            for (var i = 0; i < scripts.length; ++i) {
                if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
                    isFound = true;
                }
            }

            if (!isFound) {
                var dynamicScripts = ["https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"];

                for (var i = 0; i < dynamicScripts.length; i++) {
                    let node = document.createElement('script');
                    node.src = dynamicScripts [i];
                    node.type = 'text/javascript';
                    node.async = false;
                    node.charset = 'utf-8';
                    document.getElementsByTagName('head')[0].appendChild(node);
                }

            }
        }

}
