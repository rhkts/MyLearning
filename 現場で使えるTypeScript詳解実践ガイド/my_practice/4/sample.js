const fn = (x) => console.log(x * 2);
const args = [4];
setInterval(fn(...args), 1000);
