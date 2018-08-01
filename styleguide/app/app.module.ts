import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AUIModules } from './aui.modules';
import { ExamplesModules } from './examples.modules';
import { AppRoutingModule } from './app-routing.module';
import { Components } from './components/index';
import { Pages } from './pages/index';
import { DocumentationComponent } from './documentation/documentation.component';


@NgModule({
	declarations: [
		AppComponent,
		Components,
		Pages,
		DocumentationComponent,
	],
	imports: [
		BrowserModule,
		AUIModules,
		ExamplesModules,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
