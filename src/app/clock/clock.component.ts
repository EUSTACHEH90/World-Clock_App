import { Component, Input, OnInit,Output, EventEmitter, } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  @Input() timeZone: string = 'UTC';
  currentTime: string = '';

  @Output() timeChanged = new EventEmitter<string>();

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: this.timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    this.currentTime = new Intl.DateTimeFormat('en-US', options).format(new Date());

    this.timeChanged.emit(this.currentTime);
  }

  isNight(): boolean {
  const hour = new Date().toLocaleString('en-US', { timeZone: this.timeZone, hour: '2-digit', hour12: false });
  return +hour >= 18 || +hour < 6; 
}
}
