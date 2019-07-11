import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(values: any[], orderFields: string, asc = false): any[] {
        if (!orderFields || orderFields.trim() == "") {
            return values;
        }

        if (asc) {
            return Array.from(values).sort((item1: any, item2: any) => {
                return this.orderArray(item1[orderFields], item2[orderFields]);
            });
        } else {
            //not asc
            return Array.from(values).sort((item1: any, item2: any) => {
                return this.orderArray(item2[orderFields], item1[orderFields]);
            });
        }
    }

    private orderArray(a: any, b: any): number {
        if (parseFloat(a) < parseFloat(b)) return -1;
        if (parseFloat(a) > parseFloat(b)) return 1;

        return 0;
    }


}
