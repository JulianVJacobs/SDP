import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async store (storageKey: string, value: any){
  }

  async get(storageKey: string) {
  }

  async removeItem(storageKey: string) {
  }

  async clear() {
  }
}
