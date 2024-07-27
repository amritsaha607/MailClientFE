import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailLineComponent } from './mail-line.component';

describe('MailLineComponent', () => {
  let component: MailLineComponent;
  let fixture: ComponentFixture<MailLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
