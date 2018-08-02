import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar';
import { FOOTER_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/footer';
import { HEADER_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/header';

export const EXAMPLES_ROUTES = [
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES },
	{ path: 'footer', children: FOOTER_EXAMPLES_ROUTES },
	{ path: 'header', children: HEADER_EXAMPLES_ROUTES },
];
