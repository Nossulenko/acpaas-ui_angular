import { CalendarDemoPageComponent } from './pages/demo/demo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from '@acpaas-ui/ngx-components/calendar';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';


import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CalendarModule,
		CodeSnippetModule,
		CalendarDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class CalendarExamplesModule { }
