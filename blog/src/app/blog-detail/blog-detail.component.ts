import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogPost } from '../blog.post.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
blogPosts?:BlogPost;
constructor(private route: ActivatedRoute,private blogService: BlogService){}
ngOnInit(){
  const id = +this.route.snapshot.paramMap.get('id')!;
  this.blogPosts = this.blogService.getBlogPostById(id);
}
}
