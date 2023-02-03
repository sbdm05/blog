import { Category } from '../enums/category';

export class Post {
  title!: string;
  content!: string;
  id!: any;
  category = Category.ENTERT;
  constructor(obj?: Partial<Post>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
