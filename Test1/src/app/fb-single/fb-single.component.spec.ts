import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbSingleComponent } from './fb-single.component';

describe('FbSingleComponent', () => {
  let component: FbSingleComponent;
  let fixture: ComponentFixture<FbSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
