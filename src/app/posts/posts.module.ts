import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { PageListPostsComponent } from './pages/page-list-posts/page-list-posts.component';
import { PageAddPostsComponent } from './pages/page-add-posts/page-add-posts.component';
import { RouterModule } from '@angular/router';
import { PostsRoutingModule } from './posts-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PageEditPostComponent } from './pages/page-edit-post/page-edit-post.component';
import { CategoryDirective } from './directives/category.directive';

@NgModule({
  declarations: [FormComponent, PageListPostsComponent, PageAddPostsComponent, PageEditPostComponent, CategoryDirective],
  imports: [CommonModule, RouterModule, PostsRoutingModule, ReactiveFormsModule],
  exports: [FormComponent, PageListPostsComponent, PageAddPostsComponent],
})
export class PostsModule {}
