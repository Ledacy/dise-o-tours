import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { HabitacionesComponent } from './Habitaciones/habitaciones.component';
import { HabitacionesRepository } from './DataAccess/habitaciones.repository';
import { HttpClientModule } from "@angular/common/http";
import { TotalSeleccionHabPipe } from './totalSeleccionHab.pipe';
import { TotalHabitacionesPipe } from './totalHabitaciones.pipe';
import { TotalHuepedesHabPipe } from './totalHuespedesHab.pipe';
import { CheckOutComponent } from './CheckOut/checkout.component';
import { CheckOutRepository } from './DataAccess/checkout.repository';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { ProcessDialogComponent } from './CheckOut/process-dialog.component';
import { DetalleOrdenComponent } from './Ordenes/detalle-orden.component';
import { DisponibilidadDialogComponent } from './Habitaciones/disponibilidad-dialog.component';
import {NgsRevealModule} from 'ngx-scrollreveal';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import { HeaderPagesComponent } from './header-pages.component';
import { DatePipe } from '@angular/common';
import { MonedaFormatoPipe } from './monedaFormato.pipe';
import { StoreFirstGuard } from './storeFirst.guard';
import { HomeWebComponent } from './Web/home.component';
import { ToursWebComponent } from './Web/tours.component';
import { BungeeWebComponent } from './Web/bungee.component';
import { CañoncolcaWebComponent } from './Web/cañoncolca.component';
import { CuatrimotoWebComponent } from './Web/cuatrimoto.component';
import { CitytourWebComponent } from './Web/citytour.component';
import { ContactWebComponent } from './Web/contact.component';
import { FooterWebComponent } from './Web/footer.component';
import { VallesagradoWebComponent } from './Web/vallesagrado.component';
import { Vallesagrado2WebComponent } from './Web/vallesagrado2.component';
import { LagunahuamantayWebComponent } from './Web/lagunahuamantay.component';
import { MachupicchuWebComponent } from './Web/machupicchu.component';
import { SietecoloresWebComponent } from './Web/sietecolores.component';
import { PolcoyoWebComponent } from './Web/polcoyo.component';
import { VallesurWebComponent } from './Web/vallesur.component';
import { WaqrapukaraWebComponent } from './Web/waqrapukara.component';
import { Amanecer1WebComponent } from './Web/amanecer1.component';
import { SalkantayWebComponent } from './Web/salkantay.component';
import { Cañoncolca2WebComponent } from './Web/cañoncolca2.component';
import { ChoquequiraoWebComponent } from './Web/choquequirao.component';
import { CuscoaventuraWebComponent } from './Web/cuscoaventura.component';
import { HuchuyqosqoWebComponent } from './Web/huchuyqosqo.component';
import { IslasflotantesWebComponent } from './Web/islasflotantes.component';
import { LarestrekWebComponent } from './Web/larestrek.component';
import { MapibycarWebComponent } from './Web/mapibycar.component';
import { TourarequipaWebComponent } from './Web/tourarequipa.component';
import { CaminoincaWebComponent } from './Web/caminoinca.component';
import { CuscofugazWebComponent } from './Web/cuscofugaz.component';
import { Salkantay2WebComponent } from './Web/salkantay2.component';
import { HuacachinaWebComponent } from './Web/huacachina.component';
import { IncajunglaWebComponent } from './Web/incajungla.component';
import { Islasflotantes2WebComponent } from './Web/islasflotantes2.component';
import { ManuWebComponent } from './Web/manu.component';
import { RealWebComponent } from './Web/real.component';
import { EsenciaWebComponent } from './Web/esencia.component';
import { WonderWebComponent } from './Web/wonder.component';
import { Tours2WebComponent } from './Web/tours2.component';
import { HeaderWebComponent } from './Web/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent, HeaderPagesComponent, HeaderComponent, HabitacionesComponent, TotalSeleccionHabPipe, TotalHabitacionesPipe, TotalHuepedesHabPipe, MonedaFormatoPipe, ContactWebComponent, PolcoyoWebComponent, 
    CheckOutComponent, ProcessDialogComponent, DetalleOrdenComponent, DisponibilidadDialogComponent, HomeWebComponent, ToursWebComponent, FooterWebComponent, HeaderWebComponent, BungeeWebComponent, VallesurWebComponent,
    CañoncolcaWebComponent, CuatrimotoWebComponent, CitytourWebComponent, VallesagradoWebComponent, Vallesagrado2WebComponent, LagunahuamantayWebComponent, MachupicchuWebComponent, SietecoloresWebComponent, WaqrapukaraWebComponent,
    Amanecer1WebComponent, SalkantayWebComponent, Cañoncolca2WebComponent, ChoquequiraoWebComponent, CuscoaventuraWebComponent, HuchuyqosqoWebComponent, IslasflotantesWebComponent, LarestrekWebComponent, MapibycarWebComponent,
    TourarequipaWebComponent, CaminoincaWebComponent, Tours2WebComponent, CuscofugazWebComponent, Salkantay2WebComponent, WonderWebComponent, HuacachinaWebComponent, EsenciaWebComponent, IncajunglaWebComponent, Islasflotantes2WebComponent,
    ManuWebComponent, RealWebComponent,
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    NgsRevealModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      { path: "home", component: HomeWebComponent },
      { path: "tours", component: ToursWebComponent },
      { path: "tours2", component: Tours2WebComponent },
      { path: "salkantay2", component: Salkantay2WebComponent },
      { path: "caminoinca", component: CaminoincaWebComponent },
      { path: "cuscofugaz", component: CuscofugazWebComponent },
      { path: "wonder", component: WonderWebComponent },
      { path: "huacachina", component: HuacachinaWebComponent },
      { path: "esencia", component: EsenciaWebComponent },
      { path: "incajungla", component: IncajunglaWebComponent },
      { path: "islasflotantes2", component: Islasflotantes2WebComponent },
      { path: "manu", component: ManuWebComponent },
      { path: "real", component: RealWebComponent },
      { path: "bungee", component: BungeeWebComponent },
      { path: "colcafd", component: CañoncolcaWebComponent },
      { path: "cuatrimoto", component: CuatrimotoWebComponent },
      { path: "citytour", component: CitytourWebComponent },
      { path: "contact", component: ContactWebComponent },
      { path: "vallesagrado", component: VallesagradoWebComponent},
      { path: "vallesagrado2", component:Vallesagrado2WebComponent},
      { path: "lagunahuamantay", component:LagunahuamantayWebComponent},
      { path: "machupicchu", component:MachupicchuWebComponent},
      { path: "polcoyo", component:PolcoyoWebComponent},
      { path: "vallesur", component:VallesurWebComponent},
      { path: "waqrapukara", component:WaqrapukaraWebComponent},
      { path: "amanecer1", component:Amanecer1WebComponent},
      { path: "salkantay", component:SalkantayWebComponent},
      { path: "cañoncolca2", component:Cañoncolca2WebComponent},
      { path: "sietecolores", component:SietecoloresWebComponent},
      { path: "choquequirao", component:ChoquequiraoWebComponent},
      { path: "cuscoaventura", component:CuscoaventuraWebComponent},
      { path: "huchuyqosqo", component:HuchuyqosqoWebComponent},
      { path: "islasfoltante", component:IslasflotantesWebComponent},
      { path: "larestrek", component:LarestrekWebComponent},
      { path: "mapibycar", component:MapibycarWebComponent},
      { path: "tourarequipa", component:TourarequipaWebComponent},
      { path: "booking/:checkIn/:checkOut/:nroPersonas", component: HabitacionesComponent }, 
      { path: "checkout", component: CheckOutComponent, canActivate: [StoreFirstGuard] },
      { path: "orden-detail", component: DetalleOrdenComponent, canActivate: [StoreFirstGuard] },
      {path : '' , redirectTo : '/home' , pathMatch : 'full'},
      ], {useHash: true}),
    NgbModule      
  ],
  exports:  [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [ DatePipe, HabitacionesRepository, CheckOutRepository, StoreFirstGuard, MatDialog, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
