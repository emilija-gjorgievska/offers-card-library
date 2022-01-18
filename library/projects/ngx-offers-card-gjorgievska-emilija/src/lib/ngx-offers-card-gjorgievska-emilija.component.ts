import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-ngx-offers-card-gjorgievska-emilija',
  templateUrl: './ngx-offers-card-gjorgievska-emilija.component.html',
  styleUrls: ['./ngx-offers-card-gjorgievska-emilija.component.css'],
})
export class NgxOffersCardGjorgievskaEmilijaComponent implements OnInit {
  @Input() name = '';
  @Input() logo = '';
  @Input() rating = 0;
  @Input() depositBonusTitle = '';
  @Input() depositBonusDescription = '';
  @Input() coinsTitle = '';
  @Input() coinsValue = '';
  @Input() buttonText = '';
  @Input() websiteLink = '';

  constructor() {}

  ngOnInit(): void {}
}
