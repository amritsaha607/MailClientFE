import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComponseButtonComponent } from './mail-componse-button.component';

describe('MailComponseButtonComponent', () => {
  let component: MailComponseButtonComponent;
  let fixture: ComponentFixture<MailComponseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailComponseButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailComponseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
