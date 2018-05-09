import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { range } from 'lodash';

interface CalendarData { [year: number]: YearData; }
interface YearData { [month: number]: MonthData; }
interface MonthData { [day: number]: DayData; }

interface DayData {
  text: string;
  color: string;
}

const DEFAULT_DAY_DATA = {
  text: '',
  color: 'grey'
};

@Component({
  selector: 'n8c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  start: string; // Date string
  days: number;
  code: string;

  calendar: CalendarData = {
    2018: {
      5: {
        9: {
          text: '9!',
          color: 'blue'
        }
      }
    }
  };

  ngOnChanges(changes: SimpleChanges) {
    // updateCalendarStructure
  }

  keys<T extends Object>(obj: T) { return Object.keys(obj); }

  tabulate(year: number, month: number, data: MonthData) {
    const rows = 5;
    const offset = 0;

    return range(rows).map(row => {
      return range(7).map(column => {
        const day = row * 7 + column - offset + 1;
        return data[day] || DEFAULT_DAY_DATA;
      });
    });
  }

}
