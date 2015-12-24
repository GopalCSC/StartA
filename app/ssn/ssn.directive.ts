import {Directive,ElementRef, HostBinding} from 'angular2/core';

@Directive({
    selector: 'input[custom-ssn]',           
    host: {                    
        '(keyup)': 'onKeyUp($event)'
    }
})
export class SSNDirective {	
	@HostBinding('value') value: string;
	pattern = /^\d{3}-\d{2}-\d{4}$/
	
	constructor(private _ele:ElementRef) {		
		_ele.nativeElement.placeholder="___-__-__"
		//_ele.nativeElement.maxlength="11"	
	}
	
	onKeyUp(event) {
		console.log(this.value) 	 						
		if((event.which < 48 || event.which > 57) && !(event.which == 189))  {
			console.log(event)			
			//event.preventDefault()
			//event.cancelBubble = true
			//event.stopPropagation()			
			//this.value = this.value.			
			return false;							       		
		}  else {
			console.log('only numbers & - ')	
			/*if(event.target.value.match(this.pattern)) {
				console.log('ssn pattern')
				this.value  = event.target.value
			} else {
				console.log('NOT ssn pattern')
				this.value = ''; 
			}*/
			return true;	
		}		
	}	
}