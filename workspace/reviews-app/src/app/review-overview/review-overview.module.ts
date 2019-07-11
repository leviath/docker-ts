import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReviewOverviewRoutingModule} from './review-overview-routing.module';
import {ReviewOverviewComponent} from './components/review-overview/review-overview.component';
import {HttpClientModule} from '@angular/common/http';
import {PipesModule} from './pipes/pipes.module';
import {UiModule} from '../ui/ui.module';
import { PageReviewComponent } from './components/page-review/page-review.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import {FilterChipsModule} from '../filter-chips/filter-chips.module';

@NgModule({
    declarations: [
        ReviewOverviewComponent,
        PageReviewComponent,
        ReviewsComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        PipesModule,
        UiModule,
        ReviewOverviewRoutingModule,
        FilterChipsModule
    ]
})
export class ReviewOverviewModule {
}
