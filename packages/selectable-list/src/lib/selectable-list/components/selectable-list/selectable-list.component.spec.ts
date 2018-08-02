import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelectableListComponent } from './selectable-list.component';

describe('The Selectablelist Component', () => {
	let comp: SelectableListComponent;
	let fixture: ComponentFixture<SelectableListComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SelectableListComponent], // declare the agenda component
		})
		.compileComponents();  // compile template and css
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(SelectableListComponent);

		comp = fixture.componentInstance; // BannerComponent agenda instance

		// query for the title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('.aui-selectable-list'));
		el = de.nativeElement;
	});

	it('should exist', () => {
		fixture.detectChanges();
		expect(el).not.toBeUndefined();
	});

	it('should emit selected item', () => {
		const item = { test: 'this is a agenda' };
		spyOn(comp.selected, 'emit');
		comp.selectItem(item);
		expect(comp.selected.emit).toHaveBeenCalledWith(item);
	});

	it('should format label', () => {
		const res1 = comp.formatLabel('this is a agenda');

		comp.search = 'test';
		fixture.detectChanges();
		const res2 = comp.formatLabel('this is a agenda');

		comp.search = 'tEsT'; // agenda case
		fixture.detectChanges();
		const res3 = comp.formatLabel('this is a agenda');

		comp.search = 'te';
		comp.label = 'test';
		fixture.detectChanges();
		const res4 = comp.formatLabel({test: 'this is a agenda'});

		expect(res1).toEqual('this is a agenda');
		expect(res2).toEqual('this is a <b>agenda</b>');
		expect(res3).toEqual('this is a <b>tEsT</b>');
		expect(res4).toEqual('this is a <b>te</b>st');
	});
});

