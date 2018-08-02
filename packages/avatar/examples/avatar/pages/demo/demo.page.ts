import { Component } from '@angular/core';

@Component({
	templateUrl: './demo.page.html',
})
export class AvatarDemoPageComponent {
	public importModule = 'import { CodeSnippetModule } from \'@acpaas-ui/ngx-components/code-snippet\';';
	public example1 = '<aui-test1 image="https://robohash.org/acpaas-ui" title="My image"></aui-test1>';
	public example2 = '<aui-test1 icon="fa fa-user" title="An icon" size="L"></aui-test1>';
	public example3 = '<aui-test1 letter="T" title="The letter T" size="S"></aui-test1>';
}
