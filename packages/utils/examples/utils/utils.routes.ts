import { Routes } from '@angular/router';

import { UtilsDemoPageComponent } from './pages/demo/demo.page';

export const UTILS_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: UtilsDemoPageComponent,
		pathMatch: 'full',
	},
];
