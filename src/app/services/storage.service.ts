import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private currentItem: any;
  constructor(private storage: Storage) {}

  public setItem(value) {
    this.storage.set('items', value);
  }
  public getItems() {
    return this.storage.get('items');
  }
  public setCurrentItem(item: any) {
    this.currentItem = item;
  }
  public getCurrentItem() {
    return this.currentItem;
  }
}
