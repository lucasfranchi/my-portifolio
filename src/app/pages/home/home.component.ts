import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { LsfSliderComponent } from '../../components/lsf-slider/lsf-slider.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, LsfSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  icons = {
    faBars,
    faArrowRight,
  };

  sliderList: Array<string> = ['world !', 'devs !', 'users !', 'everybody !'];
  menuOptions: Array<string> = ['Projetos', 'Experiências', 'Hobbies', 'Tecnologias'];
}
