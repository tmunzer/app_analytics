import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mac' })

export class MacPipe implements PipeTransform {
    transform(mac: string = "") {
        var splitted = [];
        var result = "";
        for (let i =0; i <=5; i++){
            splitted.push(mac.substr(i*2, 2))
        }
        console.log(splitted)
        return splitted.join(":");
    }
}