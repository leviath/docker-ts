import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ReviewOverviewService} from '../../services/review-overview/review-overview.service';
import {ReviewFilter} from '../../../filter-chips/interfaces/review-filter';
import {ShopReviews} from '../../interfaces/shop-reviews';

@Component({
    selector: 'app-review-overview',
    templateUrl: './review-overview.component.html',
    styleUrls: ['./review-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewOverviewComponent implements OnInit {
    public shopReviews$: Observable<ShopReviews>;
    public isHighlighted = false;
    public pending$: Observable<boolean>;
    public activeFilter: ReviewFilter;

    @Input() public filterData;

    constructor(private reviewOverviewService: ReviewOverviewService) {
    }

    public ngOnInit() {
        this.getReviews();
        this.pending$ = this.reviewOverviewService.shopReviewsPending$;
    }

    public getReviews(): void {
        this.shopReviews$ = this.reviewOverviewService.getShopReviews(true);
    }

    public getActiveFilter(filter: ReviewFilter): void {
        this.activeFilter = filter;
    }

    public toggleBackgroundColor(): void {
        this.isHighlighted = !this.isHighlighted;
    }
}
