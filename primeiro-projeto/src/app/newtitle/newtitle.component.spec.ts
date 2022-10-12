import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtitleComponent } from './newtitle.component';

describe('NewtitleComponent', () => {
  let component: NewtitleComponent;
  let fixture: ComponentFixture<NewtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
