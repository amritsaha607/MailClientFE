import { Component, Input } from '@angular/core';
import { FormItem } from '../../../types';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.scss',
})
export class FormItemComponent {
  @Input() item!: FormItem;
}
