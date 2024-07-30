import { Component } from '@angular/core';
import { BlogPost } from '../blog.post.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
blogPosts:BlogPost[]=[];
constructor(private blogService :BlogService){}

ngOnInit(){
  this.blogService.blogPosts$.subscribe(post=> this.blogPosts = post)
}
}
