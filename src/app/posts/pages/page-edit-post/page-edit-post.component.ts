import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/core/models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-page-edit-post',
  templateUrl: './page-edit-post.component.html',
  styleUrls: ['./page-edit-post.component.scss'],
})
export class PageEditPostComponent implements OnInit {
  public init!: Post;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router : Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    // appel au service
    this.postsService.getPostById(id).subscribe((data) => {
      this.init = data;
    });
  }

  ngOnInit(): void {}

  onEdit(item: Post) {
    // appel au service
    console.log(item)
    this.postsService.update(item).subscribe(data=>{
      console.log(data);
      this.router.navigate([''])

    })
  }
}
