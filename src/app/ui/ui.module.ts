import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFullWidthComponent } from './components/ui-full-width/ui-full-width.component';
import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';

@NgModule({
  declarations: [UiFullWidthComponent, SidebarLayoutComponent],
  imports: [CommonModule],
  exports: [UiFullWidthComponent, SidebarLayoutComponent],
})
export class UiModule {}
