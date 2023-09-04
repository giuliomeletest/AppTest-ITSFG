import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public name: string = '';
  public surname: string = '';
  public bornIn: string = '';
  public place: string = '';

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.coreService.getData().then((data) => {
      this.name = data.name;
      this.surname = data.surname;
      this.bornIn = data.bornIn;
      this.place = data.place;
    })
  }

}
