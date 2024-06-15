type EventCallback<T = unknown> = (data: T) => void;

class EventEmitter {
  private events: Map<string, EventCallback[]> = new Map();

  on<T>(event: string, callback: EventCallback<T>): void {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)?.push(callback as EventCallback);
  }

  off<T>(event: string, callback: EventCallback<T>): void {
    if (this.events.has(event)) {
      const listeners = this.events.get(event)!;
      this.events.set(event, listeners.filter(listener => listener !== callback));
    }
  }

  emit<T>(event: string, data: T): void {
    if (this.events.has(event)) {
      for (const listener of this.events.get(event)!) {
        listener(data);
      }
    }
  }
}

const emitter = new EventEmitter();

export default emitter;