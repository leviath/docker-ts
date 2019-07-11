import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Pipe({
    name: 'assetPath'
})
export class AssetPathPipe implements PipeTransform {

    private assetHost = environment.application.assets;

    public transform(value: string, args?: any): string {
        return this.assetHost + value;
    }
}
