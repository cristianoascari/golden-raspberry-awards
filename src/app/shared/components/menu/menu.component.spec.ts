import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent]
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCurrentRoute method on ngOnInit method', () => {
    const spy = jest.spyOn(component as any, 'getCurrentRoute');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  /*it('should call buildMainMenu method', () => {
    const spy = jest.spyOn(component as any, 'buildMainMenu');
    component['getCurrentRoute']();
    expect(spy).toHaveBeenCalled();
  });*/

  it('should call isActiveMenu method', () => {
    const spy = jest.spyOn(component as any, 'isActiveMenu');
    const isActiveMenu: boolean = component['isActiveMenu']('/dashboard', 'dashboard');
    expect(spy).toHaveBeenCalled();
    expect(isActiveMenu).toBeTruthy();
  });

  /*it('should call goToPage method', () => {
    const spy = jest.spyOn(component as any, 'goToPage');
    component['goToPage']({ active: false, path: 'dashboard', title: 'Dashboard' });
    expect(spy).toHaveBeenCalled();
  });*/
});
