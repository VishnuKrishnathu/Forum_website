import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  constructor(private _sanitizer :DomSanitizer){}

  transform(value: string, ...args: unknown[]): unknown {
    // return value;
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }

}
