import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageReviewComponent} from './components/page-review/page-review.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'reviews',
        pathMatch: 'full'
    },
    {
        path: 'reviews',
        component: PageReviewComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReviewOverviewRoutingModule {
}
