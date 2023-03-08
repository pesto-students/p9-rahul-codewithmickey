const Fib = (n) => ({
    [Symbol.iterator]() {
      let i = 1;
      let last = 0, next = 0;
      return {
        next() {
          if (i++ <= n) {
            [last, next] = [next, last + next || 1];
            return { value: last, done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  });
  
  console.log([...Fib(15)]);