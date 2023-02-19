import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SerivceApp';

  products: any;

  constructor(private result: PostService){}
  ngOnInit() {

    this.result.getPostResult().subscribe((data)=>{
      console.log(data);
      this.products = data;
    })  
  }

}
