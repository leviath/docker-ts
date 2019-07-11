import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, ReplaySubject} from 'rxjs';
import {catchError, map, publishReplay, refCount, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ReviewsResponse} from '../../interfaces/reviews-response';
import {ShopReviews} from '../../interfaces/shop-reviews';

@Injectable({
    providedIn: 'root'
})
export class ReviewOverviewService {
    private shopReviews$: Observable<ShopReviews>;
    public shopReviewsSubject = new ReplaySubject<any>(1);

    private shopReviewsPendingSubject = new BehaviorSubject<boolean>(true);
    public shopReviewsPending$ = this.shopReviewsPendingSubject.asObservable();

    constructor(private httpClient: HttpClient) {
        this.defineStreams();
    }

    private defineStreams(): void {
        this.shopReviews$ = this.getShopReviews();
    }

    public getShopReviews(refresh = false): Observable<ShopReviews> {
        if (refresh || !this.shopReviews$) {
            return this.httpClient.get<ReviewsResponse>('/assets/reviews.json').pipe(
                map(response => response.response.data.shop),
                tap(shopReviewData => this.shopReviewsSubject.next(shopReviewData)),
                tap(() => this.shopReviewsPendingSubject.next(false)),
                catchError(() => {
                    this.shopReviewsPendingSubject.next(false);

                    return of(null);
                }),
                publishReplay(1),
                refCount()
            );
        }
    }

}
