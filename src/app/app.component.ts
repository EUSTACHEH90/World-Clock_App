import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { FormsModule } from '@angular/forms';
import { TimezoneService } from './services/timezone.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'World-Clock_App';
  timeZones: string[] = [];
  selectedZone: string = '';

  @ViewChild(ClockComponent) clockComponent!: ClockComponent;

  constructor(private timezoneService: TimezoneService) {
    this.timeZones = this.timezoneService.getTimeZones();
    this.selectedZone = this.timeZones[0];
  }

   refreshClock() {
    this.clockComponent.updateTime();
  }

  
}
