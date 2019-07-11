import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderByPipe} from './order-by/order-by.pipe';
import {AssetPathPipe} from './asset-path/asset-path.pipe';
import {FlagFilterPipe} from './filter-tags/filter-tags.pipe';

@NgModule({
    declarations: [
        OrderByPipe,
        AssetPathPipe,
        FlagFilterPipe
    ],
    exports: [
        OrderByPipe,
        AssetPathPipe,
        FlagFilterPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule {
}
