import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/core/enums/category';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public form!: FormGroup;
  public categories = Object.values(Category)
  @Output() submitted = new EventEmitter<Post>();
  @Input() init!: Post;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.init);
    this.form = this.fb.group({
      title: [
        this.init.title,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      content: [
        this.init.content,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      category: [this.init.category],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}
