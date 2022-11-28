// 1

/*

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

const friedRicePromise = new Promise((resolve, reject) => {
    if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
        resolve('fried rice');
    } else {
        reject('Couldn not do rice');
    }
});

friedRicePromise.then((done) => {
    console.log(done);
}).catch((notDone) => {
    console.log(notDone);
});

*/

// 2

/*

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

function ricePromise(){
    return new Promise((resolve, reject) => {
        if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
            console.log('rice prepering');
            setTimeout(() => {
                resolve('fried rice');
            }, 1000);
        } else {
            reject('Couldn not do rice');
        }
    });
}

ricePromise().then((done) => {
    console.log(done);
}).catch((notDone) => {
    console.log(notDone);
});

*/

// 3

/*

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

function ricePromise(){
    return new Promise((resolve, reject) => {
        if(bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
            resolve('fried rice');
        } else {
            reject('couldn't do rice');
        }
    });
}

ricePromise().then((done) => {
    console.log(done);
}).then(() => {
    console.log('your order accepted');
}).catch((notDone) => {
    console.log(notDone);
});

*/

// 4

/*

function scoreboard(num, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num){
                console.log('Wicket gone', num);
                resolve();
            } else {
                reject();
            }
        }, time);
    });
}

const liveWicket = scoreboard(1, 1000).then(() => {
    return scoreboard(2, 1000);
}).then(() => {
    return scoreboard(3, 500);
}).then(() => {
    return scoreboard(4, 50);
}).then(() => {
    return scoreboard(5, 150);
}).then(() => {
    return scoreboard(6, 600);
}).then(() => {
    return scoreboard(7, 70);
}).then(() => {
    return scoreboard(8, 1000);
}).then(() => {
    return scoreboard(9, 1000);
}).then(() => {
    console.log('All Out');
}).catch(() => {
    console.log('for some reason match stop')
});

*/

// 5

/* 

console.log('start');

const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
});

promise.then((res) => {
    console.log(res);
});

console.log('end');

*/

// 6

/*

console.log('start');

const fn = () => {
    return new Promise((resolve, reject) => {
        console.log(1);
        resolve('success');
    });
}

console.log('middle');

fn().then((res) => {
    console.log(res);
});

console.log('end');

*/

// 7

/*

function job(){
    return new Promise(function(resolve, reject){
        reject();
    });
}

let promise = job();

promise
    .then(function(){
        console.log('1');
    })
    .then(function(){
        console.log('2');
    })
    .then(function(){
        console.log('3');
    })
    .then(function(){
        console.log('4');
    })
    .catch(function(){
        console.log('error')
    })
    .then(function(){
        console.log('5');
    });

*/

// 8

/*

function job(state){
    return new Promise(function(resolve, reject){
        if(state){
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
    .then(function(data){
        console.log(data);
        return job(false);
    })
    .catch(function(err){
        console.log(err);        
        return 'Error Cought';
    })
    .then(function(data){
        console.log(data);        
        return job(true);
    })
    .catch(function(err){
        console.log(err);
    });

*/

// 9

/*

function job(state){
    return new Promise(function(resolve, reject){
        if(state){
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
    .then(function(data){
        console.log(data);
        return job(true);
    })
    .then(function(data){
        if(data !== 'victory'){
            throw 'Defeat';
        }

        return job(true);
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
        return job(false);
    })
    .then(function(data){
        console.log(data);
        return job(true);
    })
    .catch(function(error){
        console.log(error);
        return 'Error Caught';
    })
    .then(function(data){
        console.log(data);
        return new Error('test');
    })
    .then(function(data){
        console.log('success', data.message);
    })
    .catch(function(data){
        console.log('error', data.message);
    });

*/

// 10

/*

const firstPromise = new Promise((resolve, reject) => {
    resolve('first');
});

const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
});

secondPromise
    .then((res) => {
        return res
    })
    .then((res) => {
        console.log(res);
    });

*/

// 11

/*

async function loadJson(url){
    let response = await fetch(url);

    if(response.status == 200){
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
}

loadJson("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

*/

// 12

// if in these three in any one promise reject so other promise will not resolve.

/*

function firstPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}

function secondPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 2000);
    });
}

function thirdPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 3000);
    });
}

Promise.all([
    firstPromise('prince'),
    secondPromise('rajan'),
    thirdPromise('krish')
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

*/

// 13

// any one promise resolve or reject first that will return rase promise.

/*

function firstPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}

function secondPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 2000);
    });
}

function thirdPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 3000);
    });
}

Promise.race([
    firstPromise('prince'),
    secondPromise('rajan'),
    thirdPromise('krish')
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

*/

// 14

// all promise in some resolve or reject thats all will return by allSettled promise.

/*

function firstPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}

function secondPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(name);
        }, 2000);
    });
}

function thirdPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 3000);
    });
}

Promise.allSettled([
    firstPromise('prince'),
    secondPromise('rajan'),
    thirdPromise('krish')
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

*/

// 15

// all promise will check one by one like first check if this resolve so return it otherwise check next promise and check again in the last if not any resolve so return error.

/*

function firstPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(name);
        }, 1000);
    });
}

function secondPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(name);
        }, 2000);
    });
}

function thirdPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 3000);
    });
}

Promise.any([
    firstPromise('prince'),
    secondPromise('rajan'),
    thirdPromise('krish')
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

*/

// 16

/*

function PromisePolyFill(executor){
    let onResolve,
        onReject,
        fulfilled = false,
        rejected = false,
        called = false,
        value;

    function resolve(v){
        fulfilled = true;
        value = v;

        if(typeof onResolve === "function"){
            onResolve(value);
            called = true;
        }
    }

    function reject(reason){
        rejected = true;
        value = reason;

        if(typeof onReject === "function"){
            onReject(value);
            called = true;
        }
    }

    this.then = function (callback){
        onResolve = callback;

        if(fulfilled && !called){
            called = true;
            onResolve(value);
        }

        return this;
    };

    this.catch = function (callback){
        onReject = callback;

        if(rejected && !called){
            called = true;
            onReject(value);
        }

        return this;
    };

    try{
        executor(resolve, reject);
    } catch(error){
        reject(error);
    }
}

const promise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        reject('this is not valid');
    }, 1000);
});

promise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

*/

// 17

/*

function firstPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
}

function secondPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 2000);
    });
}

function thirdPromise(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 3000);
    });
}

Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];

        if(!promises.length){
            resolve(result);
            return;
        }

        let pending = promises.length;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((res) => {
                result[index] = res;
                pending--;

                if(pending == 0){
                    resolve(result);
                }
            }, reject);
        });
    });
}

Promise.allPolyfill([
    firstPromise('prince'),
    secondPromise('rajan'),
    thirdPromise('krish')
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

*/