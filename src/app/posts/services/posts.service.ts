import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Post } from 'src/app/core/models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  //private post$!: Observable<Post[]>;
  // posts$ devient un observable chaud
  private post$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {
    //this.post = this.http.get<Post[]>('http://localhost:3004/posts');
    // remplace le setter
    this.refreshCollection();
  }

  refreshCollection() {
    this.http.get<Post[]>('http://localhost:3004/posts').subscribe((data) => {
      // alimenter l'observable chaud
      this.post$.next(data);
    });
  }

  // getter
  get post(): Observable<Post[]> {
    return this.post$;
  }

  // setter
  // set post(col: Observable<Post[]>) {
  //   this.post$ = col;
  // }

  // add
  public add(item: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3004/posts', item);
  }

  // Get By Id
  public getPostById(id: any): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3004/posts/${id}`);
  }

  // méthode pour modifier l'objet
  // Besoin de
  public update(obj: Post): Observable<Post> {
    console.log(obj);
    return this.http
      .put<Post>(`http://localhost:3004/posts/${obj.id}`, obj)
      .pipe(
        tap(() => {
          this.refreshCollection();
        })
      );
  }

  // delete
  // Besoin de créer un obervable chaud pour modification directement
  // visible
  public delete(id: any): Observable<Post> {
    return this.http.delete<Post>(`http://localhost:3004/posts/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }
}
