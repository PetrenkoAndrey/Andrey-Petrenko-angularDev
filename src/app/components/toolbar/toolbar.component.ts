import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  metric: string = localStorage.getItem('Metric') || 'Metric'
  isMetric: boolean = this.metric === 'Metric' ? true : false;
  constructor() { }

  setMetric(value: string) {
    localStorage.setItem('Metric', value)
  }

  metricChange() {
    if (this.isMetric) {
      this.setMetric('Imperial')

    } else {
      this.setMetric('Metric')
    }
    this.isMetric = !this.isMetric
  }


  ngOnInit(): void {
  }

}
