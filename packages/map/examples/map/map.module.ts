import { MapDemoPageComponent } from './pages/demo/demo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapModule } from '@acpaas-ui/ngx-components/avatar';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		MapModule,
		CodeSnippetModule,
		MapDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class MapExamplesModule { }
