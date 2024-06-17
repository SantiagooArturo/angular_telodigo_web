import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityCounterService {

  private counters: { [key: string]: number } = {}; // Objeto para almacenar contadores por componente

  constructor() {}

  incrementCounter(componentKey: string) {
    if (!this.counters[componentKey]) {
      this.counters[componentKey] = 0;
    }
    this.counters[componentKey]++;
  }

  getCounter(componentKey: string): number {
    return this.counters[componentKey] || 0;
  }
}
