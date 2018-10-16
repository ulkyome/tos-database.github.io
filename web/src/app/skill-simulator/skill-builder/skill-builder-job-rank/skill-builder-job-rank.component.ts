import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill-builder-job-rank',
  templateUrl: './skill-builder-job-rank.component.html',
  styleUrls: ['./skill-builder-job-rank.component.scss']
})
export class SkillBuilderJobRankComponent {

  @Input() rank: number;

  constructor() { }

}
