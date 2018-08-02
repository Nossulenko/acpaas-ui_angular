import { Routes } from '@angular/router';

import { DemoPageComponent } from './pages/demo/demo.page';

export const AGENDA_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: DemoPageComponent,
		pathMatch: 'full',
	},
];
