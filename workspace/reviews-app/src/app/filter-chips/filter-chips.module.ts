import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterChipsComponent} from './components/filter-chips/filter-chips.component';
import {PipesModule} from '../review-overview/pipes/pipes.module';

@NgModule({
    declarations: [FilterChipsComponent],
    exports: [FilterChipsComponent],
    imports: [
        CommonModule,
        PipesModule
    ]
})
export class FilterChipsModule {
}
