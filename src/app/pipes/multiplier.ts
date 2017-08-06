import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name : "Multiplier"
})

export class MultiplierPipe implements PipeTransform{

    transform(value : number, multiple : string){
        let mul = parseFloat(multiple);
        return value * mul;
    }
}