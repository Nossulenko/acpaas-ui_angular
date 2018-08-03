import { Routes } from '@angular/router';

import { FlyoutDemoPageComponent } from './pages/demo/demo.page';

export const FLYOUT_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: FlyoutDemoPageComponent,
		pathMatch: 'full',
	},
];
