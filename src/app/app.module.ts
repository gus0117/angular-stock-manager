import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FormItemComponent } from './components/form-item/form-item.component';
import { FormsModule } from '@angular/forms';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { DisplayComponent } from './components/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListItemsComponent,
    FormItemComponent,
    ModalFormComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
