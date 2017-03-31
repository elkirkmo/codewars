function Event() {
  const subs = [];

  this.subscribe = (...args) => {
    args.forEach((arg) => {
      if (typeof arg === 'function') {
        subs.push(arg);
      }
    });
  };

  this.unsubscribe = (...args) => {
    args.forEach((arg) => {
      if (typeof arg === 'function') {
        if (subs.includes(arg)) {
          subs.splice(subs.lastIndexOf(arg), 1);
        }
      }
    });
  };

  this.emit = function (...args) {
    const calls = subs.slice(0);
    calls.forEach(call => call.apply(this, args));
  };
}
