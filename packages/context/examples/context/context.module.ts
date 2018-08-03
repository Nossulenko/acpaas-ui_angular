import { CodeSnippetDemoPageComponent } from './../../../code-snippet/examples/code-snippet/pages/demo/demo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextModule } from '@acpaas-ui/ngx-components/context';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';


import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		ContextModule,
		CodeSnippetModule,
		CodeSnippetDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class ContextExamplesModule { }
