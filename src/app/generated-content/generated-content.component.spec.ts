import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedContentComponent } from './generated-content.component';

describe('GeneratedContentComponent', () => {
  let component: GeneratedContentComponent;
  let fixture: ComponentFixture<GeneratedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
