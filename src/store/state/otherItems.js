import img from '../../assets/img/profile.jpg';

export const colors = {
  color1: '#ff4e88',
  color2: '#ff6700',
  color3: '#ffe300',
  color4: '#02e079',
  color5: '#325bf0',
  color6: '#a04cf7',
};

export const song = {
  audio: null,

  currSong: {
    index: 0,
    currentTime: 0,
    duration: 0,
    readyState: false,
    isPlay: false,
  },
  list: [
    {
      name: '',
      url: '',
      picurl: img,
      artistsname: '',
    },
  ],
};

export const noise = {
  audio: new Audio(),
  content: {
    name: '',
    tit: '',
    url: '',
    picurl: img,
    artistsname: '',
  },
};
