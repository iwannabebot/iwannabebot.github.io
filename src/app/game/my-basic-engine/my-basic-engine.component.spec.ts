import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBasicEngineComponent } from './my-basic-engine.component';

describe('MyBasicEngineComponent', () => {
  let component: MyBasicEngineComponent;
  let fixture: ComponentFixture<MyBasicEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBasicEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBasicEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
