import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  newPost = 'NO CONTENT';

  onAddPost() {
    this.newPost = 'The user\'s post';
  }
}
