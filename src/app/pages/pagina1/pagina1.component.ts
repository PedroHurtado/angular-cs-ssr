import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Post{
  id:string,
  title:string,
  views:number
}

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {
  posts!:Post[]
  constructor(private http:HttpClient){
    this.http.get<Post[]>('http://localhost:3000/posts')
     .subscribe(posts=>this.posts = posts)
  }
}
