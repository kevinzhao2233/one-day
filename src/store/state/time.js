const time = {
  min: 25, // 当前番茄时间
  sec: 0,
  initMin: 25, // 初始化工作番茄时间
  initSec: 0,
  restMin: 5, // 休息番茄时间
  restSec: 0,
  // isTimeOver: false, // 番茄时间到 TODO:暂时搁着，逻辑有问题
  isAutoRest: true, // 是否自动进入休息番茄
  tomatoStatus: 1, // （番茄状态） 1 工作状态、2 休息状态
  status: 1, // （按钮状态） 1 番茄未开始、2 番茄已经开始、3 番茄暂停、4 休息番茄-只有跳过按钮
};

export default time;
