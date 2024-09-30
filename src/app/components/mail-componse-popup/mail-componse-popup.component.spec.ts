import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComponsePopupComponent } from './mail-componse-popup.component';

describe('MailComponsePopupComponent', () => {
  let component: MailComponsePopupComponent;
  let fixture: ComponentFixture<MailComponsePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailComponsePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailComponsePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
