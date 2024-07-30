import { Injectable } from '@angular/core';
import { BlogPost } from './blog.post.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts : BlogPost[]=[];
  private blogPostsSubject = new BehaviorSubject<BlogPost[]>(this.blogPosts)
  blogPosts$ = this.blogPostsSubject.asObservable();

  constructor() { }

  addBlogPost(blogPost:BlogPost){
   this.blogPosts.push(blogPost);
   this.blogPostsSubject.next(this.blogPosts);
  }
  getBlogPostById(id:number):BlogPost | undefined{
    return this.blogPosts.find(post => post.id === id);
  }
}
