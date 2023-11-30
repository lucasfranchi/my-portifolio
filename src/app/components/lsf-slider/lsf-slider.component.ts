import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lsf-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lsf-slider.component.html',
  styleUrl: './lsf-slider.component.scss'
})
export class LsfSliderComponent {
  @Input()
  fixedTitle!: string

  @Input()
  sliderList!: Array<string>
}
