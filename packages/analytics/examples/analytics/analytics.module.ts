import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsModule } from '@acpaas-ui/ngx-components/Analytics';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { AnalyticsDemoPageComponent } from './pages/demo/demo.page';


import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		AnalyticsModule,
		CodeSnippetModule,
		AnalyticsDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class AnalyticsExamplesModule { }
