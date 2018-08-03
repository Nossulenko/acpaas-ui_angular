import { CodeSnippetDemoPageComponent } from './pages/demo/demo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		CodeSnippetModule,
		CodeSnippetDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class CodeSnippetExamplesModule { }
