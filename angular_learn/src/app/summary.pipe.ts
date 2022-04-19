import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'custompipe'
})

export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?: number) {
        let actual_limit = (limit)? limit : 30;
        return value.substring(0,actual_limit)+ "...";
    }
}