import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private storage: Storage) {
    this.initStorage();
  }

  public async getData() {
    const data = await this.storage.get('dataProfile');
    console.log("🚀 ~ file: home.page.ts:44 ~ HomePage ~ getData ~ data:", data)
    return data;
  }

  public async setData(name: string, surname: string, bornIn: string, place: string,sign: string) {
    await this.storage.set('dataProfile', {
      name: name,
      surname: surname,
      bornIn: bornIn,
      place: place,
      sign: sign,
    });
    await this.getData();
  }

  async initStorage() {
    await this.storage.create();
  }

}
