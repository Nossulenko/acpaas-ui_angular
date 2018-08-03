import { ANALYTICS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/analytics';
import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar';
import { CALENDAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/calendar';
import { CODESNIPPET_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/code-snippet';
import { CONTEXT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/context';
import { FLYOUT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/flyout';
import { FORMS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/forms';
import { LAYOUT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/layout';
import { LOCALSTORAGE_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/localstorage';
import { LOGO_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/logo';
import { MAP_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/map';
import { NOTIFICATIONS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/notifications';
import { PAGINATION_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/pagination';
import { PROGRESSBAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/progress-bar';
import { SELECTABLELIST_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/selectable-list';
import { TABLE_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/table';
import { UTILS_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/utils';

export const EXAMPLES_ROUTES = [
	{ path: 'analytics', children: ANALYTICS_EXAMPLES_ROUTES },
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES },
	{ path: 'calendar', children: CALENDAR_EXAMPLES_ROUTES },
	{ path: 'code-snippet', children: CODESNIPPET_EXAMPLES_ROUTES },
	{ path: 'context', children: CONTEXT_EXAMPLES_ROUTES },
	{ path: 'flyout', children: FLYOUT_EXAMPLES_ROUTES },
	{ path: 'forms', children: FORMS_EXAMPLES_ROUTES },
	{ path: 'layout', children: LAYOUT_EXAMPLES_ROUTES },
	{ path: 'localstorage', children: LOCALSTORAGE_EXAMPLES_ROUTES },
	{ path: 'logo', children: LOGO_EXAMPLES_ROUTES },
	{ path: 'map', children: MAP_EXAMPLES_ROUTES },
	{ path: 'notifications', children: NOTIFICATIONS_EXAMPLES_ROUTES },
	{ path: 'pagination', children: PAGINATION_EXAMPLES_ROUTES },
	{ path: 'progress-bar', children: PROGRESSBAR_EXAMPLES_ROUTES },
	{ path: 'selectable-list', children: SELECTABLELIST_EXAMPLES_ROUTES },
	{ path: 'table', children: TABLE_EXAMPLES_ROUTES },
	{ path: 'utils', children: UTILS_EXAMPLES_ROUTES },
];
