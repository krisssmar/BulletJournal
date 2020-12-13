import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public i = 0; // начальная точка отсчета месяцев
  totalMoney = 123;
  constructor() {
  }
  ngOnInit(): void {
    document.getElementById('variable').innerHTML = String(this.totalMoney);
    this.calendar(this.i);
  }
  calendar(i: number): void {
    const d = new Date();
    let year = d.getFullYear();
    let month = d.getUTCMonth() + i;
    if (month > 11) {
      month = month % 12;
      year += 1;
    }
    else if (month < 0){
      month = month + 12;
      year -= 1;
    }
    const firstDay = new Date(year, month, 1);
    const firstWday = firstDay.getDay();
    const nextMonth = new Date(year, month + 1, 1).getMonth();
    const lastDate = new Date(year, nextMonth, 0).getDate();
    const n = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    const mainSection = document.getElementById('curMonth');
    const dayTable = document.createElement('table');
    dayTable.id = 'Calendar';
    mainSection.appendChild(dayTable);
    dayTable.style.fontFamily = 'BulletJournal2, \'Bullet Journal\', cursive';
   // dayTable.style.textAlign = 'center';
    dayTable.style.border = 'solid 2px rgb(89,89,77)';
    dayTable.style.borderSpacing = '0px';
    dayTable.style.width = '100%';
    dayTable.style.height = '100%';
    dayTable.style.background = '#d4cabe';
    dayTable.innerHTML = '<tr><td colspan=7 rowspan=1 id=\'month\'>' + n[month] + '</td></tr>' +
      '<tr id=\"weekday\"><td width="10%">Sunday</td><td width="16%">Monday</td><td width="16%">Tuesday</td><td width="16%">Wednesday</td><td width="16%">Thursday</td><td width="16%">Friday</td><td width="10%">Saturday</td></tr>' +
      '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
      '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
      '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
      '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
      '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' +
      '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
    const day = document.getElementById('weekday');
    day.style.color = 'white';
    day.style.fontSize = '20px';
    day.style.border = 'solid 2px rgb(89,89,77)';
    const tdD = document.getElementsByTagName('td');
    tdD[0].innerHTML = n[month];
    tdD[0].width = '20px';
    tdD[0].bgColor = '#706e5f';
    tdD[0].align = 'center';
    tdD[0].style.fontFamily = 'BulletJournal, \'Bullet Journal\', cursive';
    tdD[0].style.color = 'wheat';
    tdD[0].style.fontSize = '50px';
    for (let j = 1; j <= 7; j++){
      tdD[j].style.borderBottom = 'solid 2px rgb(89,89,77)';
      tdD[j].style.borderTop = 'solid 2px rgb(89,89,77)';
      tdD[j].style.textAlign = 'center';
    }
    for (let j = 8; j <= 49; j++){
      tdD[j].style.paddingLeft = '30px';
      tdD[j].style.fontSize = '30px';
    }
    for (let k = 0; k < lastDate + firstWday; k++) {
      if (k >= firstWday) {
        tdD[8 + k].innerHTML = '<button class="day">' + String(k + 1 - firstWday) + '</button>';
      }
    }
    // кнопки
    const dDay = document.getElementsByClassName('day') as HTMLCollectionOf<HTMLElement>;;
    for (let j = 0; j <= 41; j++){
      dDay[j].style.width = '100%';
      dDay[j].style.height = '100%';
      dDay[j].style.backgroundColor = '#d4cabe';
      dDay[j].style.border = 'none';
      dDay[j].style.cursor = 'crosshair';
      dDay[j].style.textAlign = 'left';
      dDay[j].style.outline = 'none';
    }
  }
  ClickButton(i: number): void { // параметры +1 и -1
    const mainSection = document.getElementById('curMonth');
    mainSection.innerHTML = '';
    this.i += i;
    this.calendar(this.i);
  }

  EditButton(): void {
    const mainSection = document.getElementById('edit');
    const editForm = document.createElement('form');
    mainSection.appendChild(editForm);
    editForm.innerHTML = '<input id="editValue"></input><button (click)="SaveButton()">Save</button>';
  }

  SaveButton(): void{
    // ????????
  }
}


