import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '@acpaas-ui/ngx-components/utils';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		UtilsModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class UtilsExamplesModule { }
