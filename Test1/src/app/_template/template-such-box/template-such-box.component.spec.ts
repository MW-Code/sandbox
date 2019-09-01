import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSuchBoxComponent } from './template-such-box.component';

describe('TemplateSuchBoxComponent', () => {
  let component: TemplateSuchBoxComponent;
  let fixture: ComponentFixture<TemplateSuchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSuchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSuchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
