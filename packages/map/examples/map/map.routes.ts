import { Routes } from '@angular/router';

import { MapDemoPageComponent } from './pages/demo/demo.page';

export const MAP_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: MapDemoPageComponent,
		pathMatch: 'full',
	},
];
