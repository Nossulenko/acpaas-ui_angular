import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar';
import { CALENDAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/calendar';
import { LOGO_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/logo';
import { TEST_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/test';

export const EXAMPLES_ROUTES = [
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES },
	{ path: 'calendar', children: CALENDAR_EXAMPLES_ROUTES },
	{ path: 'logo', children: LOGO_EXAMPLES_ROUTES },
	{ path: 'test', children: TEST_EXAMPLES_ROUTES },
];
