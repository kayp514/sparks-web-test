import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareaComponent } from './carea.component';

describe('CareaComponent', () => {
  let component: CareaComponent;
  let fixture: ComponentFixture<CareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareaComponent]
    });
    fixture = TestBed.createComponent(CareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
