import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NightstandThreejsComponent } from './nightstand-threejs.component';

describe('NightstandThreejsComponent', () => {
  let component: NightstandThreejsComponent;
  let fixture: ComponentFixture<NightstandThreejsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NightstandThreejsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NightstandThreejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
