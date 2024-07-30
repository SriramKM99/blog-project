import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogPost } from '../blog.post.model';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent {
title : string='';
content:string='';

constructor(private blogService:BlogService){}

addPost(){
  const newPost : BlogPost = {
    id:Date.now(),
    title:this.title,
    content:this.content
    }
    this.blogService.addBlogPost(newPost);
    this.title='';
    this.content='';
}
}
