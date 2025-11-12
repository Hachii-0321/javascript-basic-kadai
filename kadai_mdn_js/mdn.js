const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const nowDisplay = year.toString() + '年' + month.toString() + '月' + date.toString() + '日'

console.log(nowDisplay)