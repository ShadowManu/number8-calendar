import { Component } from '@angular/core';
import { range, set } from 'lodash';
import { DateTime } from 'luxon';

interface CalendarData { [year: number]: YearData; }
interface YearData { [month: number]: MonthData; }
interface MonthData { [day: number]: DayData; }

interface DayData { text: string; css: string; }

const DEFAULT_DAY_DATA = { text: '', css: 'empty' };

const DAY_SYMBOLS = Array.from('SMTWTFS');

const MONTH_NAMES = {
  1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
  7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December', }

@Component({
  selector: 'n8c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  start = '05/09/2018';
  days = 260;
  code: string;

  calendar: CalendarData;

  constructor() {
    this.updateCalendar();
  }

  keys<T extends Object>(obj: T) { return Object.keys(obj); }

  daySymbols() { return DAY_SYMBOLS; }

  monthName(number: number) { return MONTH_NAMES[number]; }

  changeStart(start: string) {
    this.start = start;
    this.updateCalendar();
  }

  changeDays(days: number) {
    this.days = days;
    this.updateCalendar();
  }

  updateCalendar() { this.calendar = this.buildCalendar(this.start, this.days); }

  buildCalendar(start, days): CalendarData {
    const startTime = DateTime.fromFormat(start, 'L/d/y');

    if (!startTime.isValid) { return {}; }

    const calendar = {};

    for (let i = 0; i < days; i++) {
      const dayTime = startTime.plus({ days: i });
      const { year, month, day } = dayTime.toObject();

      const isWeekend = [6, 7].includes(dayTime.weekday);
      const css = isWeekend ? 'weekend' : 'normal';

      const dayObj = { text: day, css };
      set(calendar, [year, month, day], dayObj);
    }

    return calendar;
  }

  tabulate(year: number, month: number, data: MonthData): DayData[][] {
    const startTime = DateTime.fromObject({ year, month });
    const offset = startTime.weekday % 7; // zero-based offset from the first cell
    // TODO Define rows
    const rows = 6;

    return range(rows).map(row => {
      return range(7).map(column => {
        const day = row * 7 + column - offset + 1;
        return data[day] || DEFAULT_DAY_DATA;
      });
    });
  }
}
