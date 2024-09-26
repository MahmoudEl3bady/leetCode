class MyCalendar {
  calender: Array<number[]>;
  constructor() {
    this.calender = [];
  }

  book(start: number, end: number): boolean {
    for (let i = 0; i < this.calender.length; i++) {
      if (start < this.calender[i][1] && end > this.calender[i][0]) {
        return false;
      }
    }
    this.calender.push([start, end]);
    return true;
  }
}

