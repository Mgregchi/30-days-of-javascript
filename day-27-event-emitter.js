class EventEmitter {
  constructor() {
    this.events = {};
    this.subscriptions = [];
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    const subIndex = this.subscriptions.length;
    this.subscriptions.push({ eventName, callback });

    return {
      unsubscribe: () => {
        const arr = this.events[eventName];
        if (!arr) return;

        const idx = arr.indexOf(callback);
        if (idx !== -1) arr.splice(idx, 1);

        return undefined;
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events[eventName]) return [];

    const results = [];
    for (const cb of this.events[eventName]) {
      results.push(cb(...args));
    }
    return results;
  }
}
