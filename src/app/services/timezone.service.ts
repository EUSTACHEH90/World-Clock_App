import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // fourni automatiquement à l'application
})
export class TimezoneService {

  constructor() {}

  getTimeZones(): string[] {
    return [
      'Europe/Paris',
      'America/New_York',
      'Asia/Tokyo',
      'Australia/Sydney',
      'Africa/Ouagadougou'
    ];
  }
}
