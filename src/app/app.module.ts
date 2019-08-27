import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SimpleComponentsModule } from "./simple-components/simple-components.module";
import { HomeComponent } from "./components/home/home.component";
import { InfoComponent } from "./components/info/info.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/home/header/header.component";
import { ShowsComponent } from "./components/home/shows/shows.component";
import { GalleryComponent } from "./components/home/gallery/gallery.component";
import { AboutComponent } from "./components/about/about.component";
import { ResumeComponent } from "./components/resume/resume.component";
import { MediaComponent } from "./components/media/media.component";
import { CreditsComponent } from "./components/resume/credits/credits.component";
import { SkillsComponent } from "./components/resume/skills/skills.component";
import { SingingSamplesComponent } from "./components/media/singing-samples/singing-samples.component";
import { ProductionStillsComponent } from "./components/media/production-stills/production-stills.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./admin-components/admin/admin.component";
import { MenuComponent } from "./admin-components/menu/menu.component";
import { ManageAboutComponent } from "./admin-components/manage-about/manage-about.component";
import { ManageResumeComponent } from "./admin-components/manage-resume/manage-resume.component";
import { ManageMediaComponent } from "./admin-components/manage-media/manage-media.component";
import { ManageHomeComponent } from "./admin-components/manage-home/manage-home.component";
import { ManageShowsComponent } from './admin-components/manage-shows/manage-shows.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ShowsComponent,
    GalleryComponent,
    AboutComponent,
    ResumeComponent,
    MediaComponent,
    CreditsComponent,
    SkillsComponent,
    SingingSamplesComponent,
    ProductionStillsComponent,
    LoginComponent,
    AdminComponent,
    MenuComponent,
    ManageAboutComponent,
    ManageResumeComponent,
    ManageMediaComponent,
    ManageHomeComponent,
    ManageShowsComponent
  ],
  imports: [
    BrowserModule,
    SimpleComponentsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
