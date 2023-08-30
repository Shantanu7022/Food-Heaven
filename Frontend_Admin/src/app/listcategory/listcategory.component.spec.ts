import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcategoryComponent } from './listcategory.component';

describe('ListcategoryComponent', () => {
  let component: ListcategoryComponent;
  let fixture: ComponentFixture<ListcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcategoryComponent]
    });
    fixture = TestBed.createComponent(ListcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
