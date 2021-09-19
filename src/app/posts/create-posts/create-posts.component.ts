import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss']
})
export class CreatePostsComponent implements OnInit {
posts = '';


  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(){
     this.posts = "Hello Ang";
  }

}
