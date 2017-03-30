function Event() {
  const fs = [];

  this.subscribe = (f) => {
    fs[fs.length] = f;
  };

  this.unsubscribe = (f) => {
    if (fs.indexOf(f) !== -1) {
      fs.splice(fs.indexOf(f), 1);
    }
  };

  this.emit = (...args) => {
    for (let i = 0; i < fs.length; i += 1) {
      fs[i].apply(this, args);
    }
  };
}


