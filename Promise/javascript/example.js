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
            reject('Couldn not do rice');
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