class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        if (this.events[eventName]) {
          this.events[eventName] = this.events[eventName].filter(
            (cb) => cb !== callback
          );

        }
      },
    };
  }

  emit(eventName, args = []) {
    if (!this.events[eventName]) {
      return [];
    }

    const result = [];
    const callbacks = [...this.events[eventName]]; 

    for (const cb of callbacks) {
      result.push(cb(...args)); 
    }

    return result;
  }
}