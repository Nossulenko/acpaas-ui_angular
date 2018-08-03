import { Routes } from '@angular/router';

import { ProgressBarDemoPageComponent } from './pages/demo/demo.page';

export const PROGRESSBAR_EXAMPLES_ROUTES: Routes = [
	{
		path: '',
		component: ProgressBarDemoPageComponent,
		pathMatch: 'full',
	},
];
