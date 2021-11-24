import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss']
})
export class UserCommentComponent implements OnInit {

  @Input() public comment :string = "";
  @Input() public username :string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
