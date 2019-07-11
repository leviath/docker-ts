import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ReviewFilter} from '../../interfaces/review-filter';
import {take} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FilterService {
    public filter$: Observable<ReviewFilter>;

    constructor(private httpClient: HttpClient) {
        this.defineStreams();
    }

    private defineStreams(): void {
        this.filter$ = this.httpClient.get<ReviewFilter>('/assets/filter.json').pipe(
            take(1)
        );
    }
}
