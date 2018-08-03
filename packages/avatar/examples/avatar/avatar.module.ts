import { AvatarDemoPageComponent } from './pages/demo/demo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from '@acpaas-ui/ngx-components/avatar';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		AvatarModule,
		CodeSnippetModule,
		AvatarDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class AvatarExamplesModule { }
