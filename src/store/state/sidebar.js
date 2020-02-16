const sidebar = {
  isShowSidebar: true,
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
      defaultSelect: 'mountain',
      items: [
        {
          name: 'rainy',
          tit: '雨天',
          src: '',
        },
        {
          name: 'mountain',
          tit: '山野',
          src: '',
        },
        {
          name: 'bonfire',
          tit: '篝火',
          src: '',
        },
        {
          name: 'sun',
          tit: '阳光',
          src: '',
        },
      ],
    },
  },
};

export default sidebar;
