const PROMISE_STATES = {
    PENDING: "PENDING",
    REJECTED: "REJECTED",
    FULFILLED: "FULFILLED"
  };

function isPromise(val) {
    return val instanceof CustomPromise;
  }

class CustomPromise{
    constructor(callback) {
        try {
          callback(this._resolve, this._reject);
        } 
        catch (err) {
          this._reject(err);
        }
      }

      _resolve = (val) => {
        this.updateResult(val, PROMISE_STATES.FULFILLED);
      };
    
      _reject = (err) => {
        this.updateResult(err, PROMISE_STATES.REJECTED);
      };

      updateResult(val, state) {
        
        setTimeout(() => {
        
          if (this.state !== PROMISE_STATES.PENDING) {
            return;
          }
    
        
          if (isPromise(value)) {
            return value.then(this._resolve, this._reject);
          }
    
          this.value = val;
          this.state = state;

          this.executeHandlers();
        }, 1000);
      }

      addHandlers(handler) {
        this.handlers.push(handler);
        this.executeHandlers();
      }

      executeHandlers() {
        
        if (this.state === PROMISE_STATES.PENDING) {
          return null;
        }
    
        
        this.handlers.forEach((handler) => {
          if (this.state === PROMISE_STATES.FULFILLED) {
            return handler.onSuccess(this.value);
          }
          return handler.onFail(this.value);
        });
        
        this.handlers = [];
      }


      then(onSuccess, onFail) {
        return new CustomPromise((res, rej) => {
          this.addHandlers({
            onSuccess: function (value) {
              // if no onSuccess provided, resolve the value for the next promise chain
              if (!onSuccess) {
                return res(value);
              }
              try {
                return res(onSuccess(value));
              } catch (err) {
                return rej(err);
              }
            },
            onFail: function (value) {
              // if no onFail provided, reject the value for the next promise chain
              if (!onFail) {
                return rej(value);
              }
              try {
                return res(onFail(value));
              } catch (err) {
                return rej(err);
              }
            },
          });
        });
      }
    
      catch(onFail) {
        return this.then(null, onFail);
      }
    
      finally(callback) {
        return new CustomPromise((res, rej) => {
          let val;
          let wasRejected;
          this.then(
            (value) => {
              wasRejected = false;
              val = value;
              return callback();
            },
            (err) => {
              wasRejected = true;
              val = err;
              return callback();
            }
          ).then(() => {
            if (!wasRejected) {
              return res(val);
            }
            return rej(val);
          });
        });
      }
    }

    /* Implementation */

      
      function getNumber() {
        return getRandomArbitrary(1,1000);
      }

      function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
      }
      
      const p = new CustomPromise((resolve, reject) => {
        const num = getNumber();
        if (num % 5 === 0) reject(console.log(`${num} The number is divisible by 5`));
        else resolve(console.log(`The promise is now resolved as number ${num} is not divisible by 5`));
      });

      p.then((val) => {
        console.log(val);
      })
      .catch((err) => {
        console.log(err);
      });
