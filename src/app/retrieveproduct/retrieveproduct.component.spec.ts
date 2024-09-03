import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveproductComponent } from './retrieveproduct.component';

describe('RetrieveproductComponent', () => {
  let component: RetrieveproductComponent;
  let fixture: ComponentFixture<RetrieveproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetrieveproductComponent]
    });
    fixture = TestBed.createComponent(RetrieveproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
