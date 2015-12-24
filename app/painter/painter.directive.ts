import {Directive,ElementRef} from 'angular2/core';

@Directive({
    selector: 'canvas[custom-painter]',           
    host: {                    
        '(mouseover)': 'onMouseOver($event)'
    }
})
export class PainterDirective {	
	
	constructor(private _ele:ElementRef) {		
		//_ele.nativeElement.placeholder="___-__-__"
		//_ele.nativeElement.maxlength="11"	
	}
	
	onMouseOver(event) {
		console.log(event)	 							
	}	
}