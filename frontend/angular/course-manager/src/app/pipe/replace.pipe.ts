import { Pipe, PipeTransform } from "@angular/core";
import { __values } from "tslib";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {
    transform(value: string, char: string, valueToReplace: string){
        return value.replace(char, valueToReplace)
    }
}