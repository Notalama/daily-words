import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from './shared/local-storage.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuard } from './auth-guard';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from './../environments/environment';
import {MatRadioModule} from '@angular/material/radio';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { ValidationMessageComponent } from './shared/validation-message/validation-message.component';
import { DictionaryItemComponent } from './dictionary/dictionary-item/dictionary-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DictionaryComponent,
    ValidationMessageComponent,
    DictionaryItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatRadioModule,
    MatListModule
  ],
  providers: [AuthGuard, AuthGuardService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
