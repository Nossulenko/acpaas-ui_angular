import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsModule } from '@acpaas-ui/ngx-components/avatar';
import { CodeSnippetModule } from '@acpaas-ui/ngx-components/code-snippet';

import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		NotificationsModule,
		CodeSnippetModule,
	],
	declarations: [
		Pages,
	],
})
export class NotificationsExamplesModule { }
