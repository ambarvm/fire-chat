import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() name:string;
  @Input() description:string;
  @Input() displayName:string;
  @Input() mail:string;

  constructor() { }

  ngOnInit(): void {
  }

}
