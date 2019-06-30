import { Component, OnInit } from '@angular/core';
import {collectedInfoMock} from "../fake-api/collected-info-fake";
import {statsMock} from "../fake-api/state-fake";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent  {

  public stats = statsMock;

  // data goes here
  public single = [
    {
      "name": "Commercant 1",
      "value": 1940000
    },
    {
      "name": "Commercant 2",
      "value": 3000000
    },
    {
      "name": "Commercant 3",
      "value": 6200000
    },
    {
      "name": "Commercant 4",
      "value": 8700000
    },
    {
      "name": "Commercant 5",
      "value": 5700000
    },
    {
      "name": "Commercant 6",
      "value": 3200000
    }
  ];

  public multi = [
    {
      "name": "Commercant 1",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },

    {
      "name": "Commercant 2",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },

    {
      "name": "Commercant 3",
      "series": [
        {
          "name": "2010",
          "value": 35000000
        },
        {
          "name": "2011",
          "value": 4800000
        }
      ]
    },
    {
      "name": "Commercant 4",
      "series": [
        {
          "name": "2010",
          "value": 1000002
        },
        {
          "name": "2011",
          "value": 6800000
        }
      ]
    },
    {
      "name": "Commercant 5",
      "series": [
        {
          "name": "2010",
          "value": 1000002
        },
        {
          "name": "2011",
          "value": 7800000
        }
      ]
    },
    {
      "name": "Commercant 6",
      "series": [
        {
          "name": "2010",
          "value": 2000002
        },
        {
          "name": "2011",
          "value": 25800000
        }
      ]
    }
  ];


  view: any[] = [700, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#3361FF', '#FF8A33' , '#F5110A' ]
  };

  // line, area
  autoScale = true;

  //pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
}
