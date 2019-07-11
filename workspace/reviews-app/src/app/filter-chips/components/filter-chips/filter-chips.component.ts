import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {ReviewFilter} from '../../interfaces/review-filter';
import {FilterService} from '../../services/filter/filter.service';

@Component({
    selector: 'app-filter-chips',
    templateUrl: './filter-chips.component.html',
    styleUrls: ['./filter-chips.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterChipsComponent implements OnInit {
    public filter$: Observable<ReviewFilter>;
    public isClicked = 0;
    public filterMenuIsActive = false;
    public activeFilter: ReviewFilter;

    @Output() filterDataChange = new EventEmitter<ReviewFilter>();

    constructor(private filterService: FilterService) {
    }

    public ngOnInit() {
        this.defineStreams();
    }

    private defineStreams(): void {
        this.filter$ = this.filterService.filter$;
    }

    public openFilterMenu(): void {
        this.filterMenuIsActive = !this.filterMenuIsActive;
    }

    public changeFilter(i: number, filter: ReviewFilter): number {
        this.filterMenuIsActive = !this.filterMenuIsActive;

        this.activeFilter = filter;
        this.filterDataChange.emit(filter);

        return this.isClicked = i;
    }

}
