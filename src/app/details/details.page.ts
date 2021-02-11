import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  result: any;
  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.result = this.storageService.getCurrentItem();
  }
}
