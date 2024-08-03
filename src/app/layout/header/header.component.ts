import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() initials: string = '-_-';
  @Output() signOutEmitter: EventEmitter<string> = new EventEmitter<string>();

  signOut() {
    this.signOutEmitter.emit('sign-out');
  }
}
