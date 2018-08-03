import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class CalendarDemoPageComponent {
	public selectDate(event) {
		console.log(event);
	}
}
