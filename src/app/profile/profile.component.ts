import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() name;
  @Input() desc;
  @Input() dname;
  @Input() mail;

  constructor() { }

  ngOnInit(): void {
  }

}
