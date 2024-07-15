import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailOpenedComponent } from './mail-opened.component';

describe('MailOpenedComponent', () => {
  let component: MailOpenedComponent;
  let fixture: ComponentFixture<MailOpenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailOpenedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
