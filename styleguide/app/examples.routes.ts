import { ANALYTICS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/analytics';
import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar';
import { CONTEXT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/context';
import { FLYOUT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/flyout';
import { LOCALSTORAGE_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/localstorage';
import { LOGO_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/logo';
import { UTILS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/utils';

export const EXAMPLES_ROUTES = [
	{ path: 'analytics', children: ANALYTICS_EXAMPLES_ROUTES },
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES },
	{ path: 'context', children: CONTEXT_EXAMPLES_ROUTES },
	{ path: 'flyout', children: FLYOUT_EXAMPLES_ROUTES },
	{ path: 'localstorage', children: LOCALSTORAGE_EXAMPLES_ROUTES },
	{ path: 'logo', children: LOGO_EXAMPLES_ROUTES },
	{ path: 'utils', children: UTILS_EXAMPLES_ROUTES },
];
