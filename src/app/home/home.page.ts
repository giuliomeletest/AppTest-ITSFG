import { Component } from '@angular/core';
import { CoreService } from '../core-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public name: string = '';
  public surname: string = '';
  public bornIn: string = '';
  public place: string = '';
  public sign: string = '';

  public dataSending: boolean = false;

  constructor(private coreService: CoreService, private router: Router) { }

  public sendData() {
    if (this.name === '' || this.surname === '' || this.bornIn === '' || this.place === '' || this.sign === '') {
      alert('Attenzione, alcuni dati sono assenti')
    } else {
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.name);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.surname);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.bornIn);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.place);
      console.log("🚀 ~ file: home.page.ts:10 ~ HomePage ~ inputExample:", this.sign);
      this.dataSending = true;
    }
  }

  public async registerNow() {
    await this.coreService.setData(this.name,this.surname,this.bornIn,this.place, this.sign);
    this.router.navigate(['profile'])
  }

}
