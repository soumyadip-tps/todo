import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './component/project/project.component';
import { ItemComponent } from './component/item/item.component';
import { ListComponent } from './component/list/list.component';
import { ProjectstoreService } from './service/projectstore.service';
import { FormsModule } from '@angular/forms';
import { FlPipe } from './pipe/fl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ItemComponent,
    ListComponent,
    FlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProjectstoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
