import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterendComponent } from './footerend.component';

describe('FooterendComponent', () => {
  let component: FooterendComponent;
  let fixture: ComponentFixture<FooterendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
