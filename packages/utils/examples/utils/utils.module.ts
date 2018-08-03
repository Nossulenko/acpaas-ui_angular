import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '@acpaas-ui/ngx-components/utils';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';
import { UtilsDemoPageComponent } from './pages/demo/demo.page';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		UtilsModule,
		CodeSnippetModule,
		UtilsDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class UtilsExamplesModule { }
