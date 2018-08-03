import { LogoDemoPageComponent } from './pages/demo/demo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from '@acpaas-ui/ngx-components/logo';


import { Pages } from './pages/index';

@NgModule({
	imports: [
		CommonModule,
		LogoModule,
		LogoDemoPageComponent,
	],
	declarations: [
		Pages,
	],
})
export class LogoExamplesModule { }
