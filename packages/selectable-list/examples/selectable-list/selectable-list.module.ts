import { SelectableListDemoPageComponent } from './pages/demo/demo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';


import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		SelectableListModule,
		CodeSnippetModule,
		SelectableListDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class SelectableListExamplesModule { }
