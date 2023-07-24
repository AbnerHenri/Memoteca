import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { FormsModule } from '@angular/forms';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { AppRoutingModule } from './app-routing.module';
import { ThoughtComponent } from './components/thoughts/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { EditThoughtsComponent } from './components/thoughts/edit-thoughts/edit-thoughts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtsComponent,
    ListThoughtsComponent,
    ThoughtComponent,
    ModalComponent,
    EditThoughtsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
