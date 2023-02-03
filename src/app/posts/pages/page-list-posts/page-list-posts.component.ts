import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-page-list-posts',
  templateUrl: './page-list-posts.component.html',
  styleUrls: ['./page-list-posts.component.scss'],
})
export class PageListPostsComponent implements OnInit {
  public posts!: Post[];

  constructor(private postsService: PostsService, private router: Router) {
    this.postsService.post.subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }

  ngOnInit(): void {}

  onEdit(id: number) {
    this.router.navigate(['edit-post', id]);
  }

  onDelete(id: number) {
    // call service
    this.postsService.delete(id).subscribe((data) => {
      console.log(data);
    });
  }
}
