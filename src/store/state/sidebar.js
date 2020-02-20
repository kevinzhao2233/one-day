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
    keepPlay: {
      name: 'keepPlay',
      tit: '休息时依然播放音乐',
      state: false,
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
          url: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/noise/bigsurf.mp3',
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/bigsurf.jpg',
          artistsname: '澎湃的大海声',
        },
        {
          name: 'birds',
          tit: '山野',
          url: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/noise/birds.mp3',
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/birds.jpg',
          artistsname: '山野间的虫鸣鸟叫',
        },
        {
          name: 'coffee',
          tit: '咖啡',
          url: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/noise/coffee.mp3',
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/coffee.jpg',
          artistsname: '繁忙的咖啡馆',
        },
        {
          name: 'rainbest',
          tit: '暴雨',
          url: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/noise/rainbest.mp3',
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/rainbest.jpg',
          artistsname: '急切的暴雨',
        },
        {
          name: 'snow',
          tit: '雪',
          url: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/noise/snow.mp3',
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/snow.png',
          artistsname: '宁静的雪花',
        },
        {
          name: 'thunder',
          tit: '雷雨',
          url: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/noise/thunder.mp3',
          picurl: 'https://gitee.com/kevin_zhao_2233/one-day-static/raw/master/img/thunder.jpg',
          artistsname: '盛夏的雷雨天',
        },
      ],
    },
  },
};

export default sidebar;
