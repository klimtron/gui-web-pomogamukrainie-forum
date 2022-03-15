import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindHelpComponent } from './find-help.component';
import { MatCardModule } from '@angular/material/card';
import { CategoryNavigationComponentModule } from '@app/shared/components';
import { AccommodationSearchModule } from './accommodation-search/accommodation-search.module';
import { TransportSearchModule } from './transport-search/transport-search.module';
import { MaterialAidSearchModule } from './material-aid-search/material-aid-search.module';
import { TranslateModule } from '@ngx-translate/core';
import { ViewOfferAccommodationModule } from './view-offer-accommodation/view-offer-accommodation.module';
import { FindHelpRoutingModule } from './find-help.routing.module';
import { SearchResultComponentModule } from './search-result/search-result.module';
import { ViewOfferAccomodationModule } from './view-offer-accommodation/view-offer-accommodation.routing.module';

@NgModule({
  declarations: [FindHelpComponent],
  imports: [
    CommonModule,
    CategoryNavigationComponentModule,
    MatCardModule,
    TranslateModule,
    FindHelpRoutingModule,
    AccommodationSearchModule,
    TransportSearchModule,
    MaterialAidSearchModule,
    TranslateModule,
    ViewOfferAccommodationModule,
  ],
})
export class FindHelpModule {}
