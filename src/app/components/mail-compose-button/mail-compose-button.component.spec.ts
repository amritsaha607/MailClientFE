import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComposeButtonComponent } from './mail-compose-button.component';

describe('MailComposeButtonComponent', () => {
  let component: MailComposeButtonComponent;
  let fixture: ComponentFixture<MailComposeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailComposeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailComposeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
