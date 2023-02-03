import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPostsComponent } from './pages/page-add-posts/page-add-posts.component';
import { PageEditPostComponent } from './pages/page-edit-post/page-edit-post.component';
import { PageListPostsComponent } from './pages/page-list-posts/page-list-posts.component';

const routes: Routes = [
  { path: '', component: PageListPostsComponent},
  { path: 'add-post', component: PageAddPostsComponent },
  { path: 'edit-post/:id', component: PageEditPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
