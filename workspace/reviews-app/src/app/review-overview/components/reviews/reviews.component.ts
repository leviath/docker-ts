import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Reviews} from '../../interfaces/reviews';
import {ReviewFilter} from '../../../filter-chips/interfaces/review-filter';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsComponent {
    @Input() public reviews: Reviews;
    @Input() public isHighlighted: boolean;
    @Input() public activeFilter: ReviewFilter;

    public showDateInformation: number;

    public toggleActiveClass(index: number): number {
        if (this.showDateInformation === index) return this.showDateInformation = null;
        return this.showDateInformation = index;
    }
}
