import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-page-add-posts',
  templateUrl: './page-add-posts.component.html',
  styleUrls: ['./page-add-posts.component.scss'],
})
export class PageAddPostsComponent implements OnInit {
  public init: Post = new Post();

  constructor(private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {
    console.log(this.init)
  }

  public onAdd(item: Post) {
    console.log(item);
    // appel au service
    this.postsService.add(item).subscribe((data) => {
      console.log(data);
      this.router.navigate(['']);
    });
  }
}
