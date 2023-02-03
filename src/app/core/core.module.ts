import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { PostsModule } from '../posts/posts.module';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [UiModule, PostsModule, NavComponent],
})
export class CoreModule {}
