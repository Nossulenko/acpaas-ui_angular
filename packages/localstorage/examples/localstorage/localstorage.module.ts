import { LocalstorageDemoPageComponent } from './pages/demo/demo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalstorageModule } from '@acpaas-ui/ngx-components/localstorage';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';


import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		LocalstorageModule,
		CodeSnippetModule,
		LocalstorageDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class LocalstorageExamplesModule { }
