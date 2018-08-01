import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class AvatarDemoPageComponent {
	public importModule = 'import { CodeSnippetModule } from \'@acpaas-ui/ngx-components/code-snippet\';';
	public example1 = '<aui-agenda image="https://robohash.org/acpaas-ui" title="My image"></aui-agenda>';
	public example2 = '<aui-agenda icon="fa fa-user" title="An icon" size="L"></aui-agenda>';
	public example3 = '<aui-agenda letter="T" title="The letter T" size="S"></aui-agenda>';
}
