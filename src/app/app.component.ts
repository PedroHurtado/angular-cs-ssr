import { Component, afterNextRender, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = signal(10);
  constructor(){
    afterNextRender(()=>{
      const foo = {id:1}
      localStorage.setItem("foo",JSON.stringify(foo))
    })
  }
  handlerClick(){
    this.count.update(value=>value+1);
  }
}
