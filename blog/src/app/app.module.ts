import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { FormsModule } from '@angular/forms';
import { BlogService } from './blog.service';
import{ ButtonModule} from 'primeng/button';
import{ InputTextModule} from 'primeng/inputtext';
import{InputTextareaModule} from 'primeng/inputtextarea'
import {TableModule} from 'primeng/table'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
