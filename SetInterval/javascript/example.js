// 1

console.log('script start');

const id =  setInterval(() => {
    console.log(Math.random());
    clearInterval(id);
}, 1000);

console.log('script end');