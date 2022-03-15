import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@app/core/api';
import { Router } from '@angular/router';
import { CategoryRoutingName } from '@app/shared/models';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnChanges {
  constructor(private router: Router) {}

  @Input()
  offerId: number = 0;
  @Input()
  category?: CategoryRoutingName;
  @Input()
  location?: Location;
  @Input()
  destination?: Location;
  @Input()
  title!: string;
  @Input()
  description!: string;
  @Input()
  posted?: Date | string | undefined;

  postedDate: Date | undefined;

  onViewOffer(offerId: number) {
    this.router.navigate(['znajdz-pomoc', 'view-offer', offerId]);
  }

  ngOnChanges({ posted }: SimpleChanges) {
    const postedVal = posted.currentValue;
    if (postedVal === undefined || postedVal instanceof Date) {
      this.postedDate = postedVal;
    } else {
      this.postedDate = new Date(postedVal);
    }
  }
}
