import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {PipesModule} from '../review-overview/pipes/pipes.module';

@NgModule({
    declarations: [SpinnerComponent],
    exports: [SpinnerComponent],
    imports: [
        CommonModule,
        PipesModule
    ]
})
export class UiModule {
}
