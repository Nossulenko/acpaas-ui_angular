import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { LayoutModule } from '@acpaas-ui/ngx-components/layout';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';


import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		//LayoutModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class LayoutExamplesModule { }
