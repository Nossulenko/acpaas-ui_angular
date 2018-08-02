import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { DebugElement, SimpleChange, SimpleChanges, Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

import { UploadInputComponent } from './upload-input.component';

@Component({
	template: '<div>Upload</div>',
	selector: 'aui-upload',
})
class MockUploadComponent {
	@Input() public options;
}

describe('The upload zone component', () => {
	let comp: UploadInputComponent;
	let fixture: ComponentFixture<UploadInputComponent>;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				UploadInputComponent,
				MockUploadComponent,
			],
		})
		.compileComponents(); // compile template and css
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(UploadInputComponent);
		comp  = fixture.componentInstance;
	});

	it('Should format data', () => {
		const data = [{
			name: 'Test image',
			url: 'http://agenda.com/image.jpg',
		}, {
			name: 'Test image 2',
			url: 'http://agenda.com/image2.jpg',
		}];
		comp.format = (d) => {
			return d.map((o) => {
				return o.name;
			});
		};
		fixture.detectChanges();
		spyOn(comp, 'propagateChange');
		comp.onUpload(data);
		expect(comp.propagateChange).toHaveBeenCalledWith(['Test image', 'Test image 2']);
	});
});
