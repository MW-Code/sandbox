import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFbItemComponent } from './template-fb-item.component';

describe('TemplateFbItemComponent', () => {
  let component: TemplateFbItemComponent;
  let fixture: ComponentFixture<TemplateFbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
