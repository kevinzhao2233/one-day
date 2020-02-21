// 这里为非长期保存参数，只在整个番茄钟周期中使用到
const time = {
  min: 0, // 当前番茄时间
  sec: 0,
  // initMin: 25, // 初始化工作番茄时间，已经转移至state.sidebar
  initSec: 0,
  // restMin: 0, // 休息番茄时间，已经转移至state.sidebar
  restSec: 0,
  isTimeOver: false, // 整个番茄时钟结束
  // isAutoRest: true, // 是否自动进入休息番茄，已经转移至state.sidebar
  tomatoStatus: 1, // （番茄状态） 1 工作状态、2 休息状态
  status: 1, // （按钮状态） 1 番茄未开始、2 番茄已经开始、3 番茄暂停、4 休息番茄-只有跳过按钮
};

export default time;
