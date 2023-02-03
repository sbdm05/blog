import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCategory]',
})
export class CategoryDirective {
  @Input() cat!: string;
  @HostBinding('class') className!: string;

  constructor() {
    console.log('test');

  }

  ngOnInit() {
    console.log(this.cat)
    this.className = this.cat.toLowerCase();
  }
}
