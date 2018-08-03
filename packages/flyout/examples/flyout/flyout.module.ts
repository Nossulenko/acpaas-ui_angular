import { FlyoutDemoPageComponent } from './pages/demo/demo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';


import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		FlyoutModule,
		CodeSnippetModule,
		FlyoutDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class FlyoutExamplesModule { }
