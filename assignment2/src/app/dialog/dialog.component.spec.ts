import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit close event when closeDialog is called', () => {
    spyOn(component.close, 'emit');
    component.closeDialog();
    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should not display the dialog when isOpen is false', () => {
    component.isOpen = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('dialog')).toBeFalsy();
  });

  it('should display the dialog when isOpen is true', () => {
    component.isOpen = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('dialog')).toBeTruthy();
  });
});
