import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { environment } from '../environments/environment';
import { FireauthService } from './shared/fireauth.service';
import { AuthGuard } from './shared/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ProductService } from './shared/product.service';
import { FinalComponent } from './final/final.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ContactComponent,
    AdminComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'courses', component: CoursesComponent},
      { path: 'contact', component: ContactComponent },
      { path: 'admin', component: AdminComponent},
      { path: 'final/:$key', component: FinalComponent}
    ])
  ],
  providers: [FireauthService, ProductService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
