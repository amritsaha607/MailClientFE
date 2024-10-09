import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComposePopupComponent } from './mail-compose-popup.component';

describe('MailComposePopupComponent', () => {
  let component: MailComposePopupComponent;
  let fixture: ComponentFixture<MailComposePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailComposePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailComposePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
