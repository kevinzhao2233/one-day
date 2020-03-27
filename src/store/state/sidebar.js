import bigsurfurl from '../../assets/msc/bigsurf.mp3';
import birdsurl from '../../assets/msc/birds.mp3';
import coffeeurl from '../../assets/msc/coffee.mp3';
import rainbesturl from '../../assets/msc/rainbest.mp3';
import snowurl from '../../assets/msc/snow.mp3';
import thunderurl from '../../assets/msc/thunder.mp3';

const sidebar = {
  isShowSidebar: false,
  setting: {
    isPlayAudio: {
      name: 'isPlayAudio',
      tit: '播放TODO页音效',
      state: true,
    },
    isAutoRest: {
      name: 'isAutoRest',
      tit: '自动开始休息番茄',
      state: true,
    },
    workTomato: {
      name: 'workTomato',
      tit: '工作番茄时长(分)',
      time: 25,
    },
    restTomato: {
      name: 'restTomato',
      tit: '休息番茄时长(分)',
      time: 5,
    },
    whiteNoise: {
      name: 'whiteNoise',
      tit: '选择喜欢的白噪声',
      defaultSelect: 'birds',
      items: [
        {
          name: 'bigsurf',
          tit: '大海',
          url: bigsurfurl,
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/bigsurf.jpg',
          artistsname: '澎湃的大海声',
        },
        {
          name: 'birds',
          tit: '山野',
          url: birdsurl,
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/birds.jpg',
          artistsname: '山野间的虫鸣鸟叫',
        },
        {
          name: 'coffee',
          tit: '咖啡',
          url: coffeeurl,
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/coffee.jpg',
          artistsname: '繁忙的咖啡馆',
        },
        {
          name: 'rainbest',
          tit: '暴雨',
          url: rainbesturl,
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/rainbest.jpg',
          artistsname: '急切的暴雨',
        },
        {
          name: 'snow',
          tit: '雪',
          url: snowurl,
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/snow.png',
          artistsname: '宁静的雪花',
        },
        {
          name: 'thunder',
          tit: '雷雨',
          url: thunderurl,
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/thunder.jpg',
          artistsname: '盛夏的雷雨天',
        },
      ],
    },
  },
};

export default sidebar;
