import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Education, WorkExperiences } from '../../model/dataModel';
import { WidgetComponent } from "../widget/widget.component";

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CardComponent, WidgetComponent],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  @Input() icon!:string;
  @Input() title!:string;
  @Input() text!:string;
  @Input() listCard!:WorkExperiences[] | Education[];
  @Input() images!:string[];
  @Input() widgets!:any;
}
