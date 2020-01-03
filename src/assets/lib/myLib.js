// 生产 Number 类型的时间戳
function getTimeStemp() {
  return Number(new Date());
}

// 生成一个不会重复的id值
function createId() {
  return `${(Math.random() * 10000000).toString(16).substr(0, 4)}-${(new Date()).getTime()}-${Math.random().toString().substr(2, 5)}`;
}

export { getTimeStemp, createId };
