import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  productInformation = null;
  barCodes: any = [];
  constructor(
    public barcodeScanner: BarcodeScanner,
    private storageService: StorageService,
    private router: Router
  ) {}
  ngOnInit() {
    this.storageService
      .getItems()
      .then((res) => {
        if (res) {
          this.barCodes = res;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  openBarCodeScanner() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        if (!barcodeData.cancelled) {
          this.barCodes.unshift(barcodeData);
          this.storageService.setCurrentItem(barcodeData);
          this.router.navigateByUrl('/details');
        }
        debugger;
        this.storageService.setItem(this.barCodes);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
