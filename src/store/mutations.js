import {
  ADD_TODO,
  TOGGLE_DONE,
  DEL_TODO,
  DECREASE_SEC,
  DECREASE_MIN,
  TIME_OVER,
  CHANGE_STATUS_TO_RESTART,
  CHANGE_STATUS_TO_START,
  CHANGE_STATUS_TO_STOP,
  CHANGE_STATUS_TO_END,
  CHANGE_CURRENT_TIME,
  UPDATE_TODOS,
  TOGGLE_SHOW_SIDEBAR,
  MODIFY_SETTING,
  DELETE_NOTE,
  UPDATE_NOTE,
  ADD_A_NOTE,
  SAVE_SONG,
  UPDATE_PROPRESS,
  PLAYER_READY_STATE,
  CLEAR_AUDIO,
  PLAY_OR_PAUSE,
  UPDATE_SONG,
  LOAD_WHITE_NOISE,
  PLAY_OR_PAUSE_NOISE,
  LS_SET_TODOS,
  LS_GET_TODOS,
  LS_SET_NOTES,
  LS_GET_NOTES,
  LS_SET_SETTING,
  LS_GET_SETTING,
  INIT_TOMATO,
} from './mutations-types';

const mutations = {
  // 添加 TODO || 直接插入到数组首位
  [ADD_TODO](state, payload) {
    if (payload.text.trim() !== '') {
      state.todos.unshift({
        id: payload.id,
        text: payload.text,
        done: false,
        buildTime: payload.buildTime,
        lastUpdate: payload.lastUpdate,
        color: payload.colorLabel,
      });
    }
    this.commit(LS_SET_TODOS);
  },

  // 切换一条 TODO 的完成状态 || 通过 id，找到要删除的下标，用splice删除，根据 lastUpdate
  [TOGGLE_DONE](state, payload) {
    const willToggleDone = state.todos.findIndex((todo) => todo.id === payload.id);
    state.todos[willToggleDone].done = !payload.done;
    state.todos[willToggleDone].lastUpdate = payload.lastUpdate;
    state.todos.sort((a, b) => b.lastUpdate - a.lastUpdate);
    this.commit(LS_SET_TODOS);
  },

  // 删除一项 TODO || 通过 id，找到要删除的下标，用splice删除。如果使用delete删除会将被删项都变成 undefined，无法用 v-for
  [DEL_TODO](state, payload) {
    const willDeleteTodo = state.todos.findIndex((todo) => todo.id === payload.id);
    state.todos.splice(willDeleteTodo, 1);
    this.commit(LS_SET_TODOS);
  },

  // 更新 todos
  [UPDATE_TODOS](state, payload) {
    state.todos = JSON.parse(JSON.stringify(payload));
    this.commit(LS_SET_TODOS);
  },

  /**
   * ========= 以下为 番茄钟页面的 mutation
   */
  // 初始化时间
  [INIT_TOMATO](state) {
    state.time.min = state.sidebar.setting.workTomato.time;
  },
  // 倒计时-分钟 || 直接减一即可，异步进行计算的部分在action中
  [DECREASE_MIN](state) {
    state.time.min -= 1;
  },
  // 倒计时-秒 || 直接减一
  [DECREASE_SEC](state) {
    const { sec } = state.time;
    if (sec === 0) {
      state.time.sec = 59;
    } else {
      state.time.sec -= 1;
    }
  },

  // 设置当前计时
  [CHANGE_CURRENT_TIME](state, payload) {
    if (payload === 'restart') {
      state.time.min = state.sidebar.setting.workTomato.time;
      state.time.sec = state.time.initSec;
      state.time.tomatoStatus = 1;
    } else if (payload === 'toRest') {
      state.time.min = state.sidebar.setting.restTomato.time;
      state.time.sec = state.time.restSec;
      state.time.tomatoStatus = 2;
    } else {
      // eslint-disable-next-line no-console
      console.error('程序出问题了，CHANGE_CURRENT_TIME 必须有payload');
    }
  },

  // 时间到 || 给标志
  [TIME_OVER](state) {
    state.time.isTimeOver = !state.time.isTimeOver;
  },

  [CHANGE_STATUS_TO_RESTART](state) {
    state.time.status = 1;
  },
  [CHANGE_STATUS_TO_START](state) {
    state.time.status = 2;
  },
  [CHANGE_STATUS_TO_STOP](state) {
    state.time.status = 3;
  },
  [CHANGE_STATUS_TO_END](state) {
    state.time.status = 4;
  },

  /**
   * 以下是Note部分的
   */

  // 添加Note
  [ADD_A_NOTE](state, payload) {
    const newNote = { id: payload.id, content: '' };
    state.notes.push(newNote);
    this.commit(LS_SET_NOTES);
  },

  // 删除Note
  [DELETE_NOTE](state, payload) {
    const willDeleteNote = state.notes.findIndex((note) => note.id === payload.id);
    state.notes.splice(willDeleteNote, 1);
    this.commit(LS_SET_NOTES);
  },
  // 更新Note
  [UPDATE_NOTE](state, payload) {
    const willUpdateNote = state.notes.findIndex((note) => note.id === payload.id);
    if (state.notes[willUpdateNote].content !== payload.content) {
      state.notes[willUpdateNote].content = payload.content;
    }
    this.commit(LS_SET_NOTES);
  },

  /**
   * 以下为侧边栏部分
   */
  // 切换显示侧边栏
  [TOGGLE_SHOW_SIDEBAR](state, payload) {
    state.sidebar.isShowSidebar = payload;
  },
  // 修改设置
  [MODIFY_SETTING](state, payload) {
    state.sidebar.setting[payload.name][payload.item] = payload.value;
    this.commit(LS_SET_SETTING);
  },

  /**
   * 以下为歌曲页面
   */
  // 保存歌曲，并获得歌曲在list中的索引
  [SAVE_SONG](state, payload) {
    const index = state.song.list.push(payload.res);
    state.song.currSong.index = index - 1;
    state.song.audio = payload.audio;
  },
  // 更新歌曲
  [UPDATE_SONG](state, payload) {
    state.song.currSong.index = payload.index;
    state.song.audio = payload.audio;
  },
  // 设置播放器准备状态
  [PLAYER_READY_STATE](state, payload) {
    state.song.currSong.readyState = payload;
  },
  // 更新进度条
  [UPDATE_PROPRESS](state) {
    state.song.currSong.currentTime = state.song.audio.currentTime;
    state.song.currSong.duration = state.song.audio.duration;
  },
  // 清除audio
  [CLEAR_AUDIO](state) {
    state.song.currSong.isPlay = false;
    state.song.audio.src = '';
  },
  // 播放与暂停
  [PLAY_OR_PAUSE](state, payload) {
    if (payload.isPlay) {
      state.song.audio.play();
      state.song.currSong.isPlay = true;
    } else {
      state.song.audio.pause();
      state.song.currSong.isPlay = false;
    }
  },
  // 装填白噪声
  [LOAD_WHITE_NOISE](state) {
    const noise = state.sidebar.setting.whiteNoise;
    const noiseIndex = noise.items.findIndex((item) => item.name === noise.defaultSelect);
    state.noise.content = JSON.parse(JSON.stringify(noise.items[noiseIndex]));
    state.noise.audio.src = state.noise.content.url;
    state.noise.audio.loop = true;
  },
  [PLAY_OR_PAUSE_NOISE](state, payload) {
    if (payload.isPlay) {
      state.noise.audio.play();
    } else {
      state.noise.audio.pause();
    }
  },

  /**
   * localStorage 操作
   */
  // set TODOS
  [LS_SET_TODOS](state) {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  // get TODOS
  [LS_GET_TODOS](state) {
    if (localStorage.getItem('todos')) {
      state.todos = JSON.parse(localStorage.getItem('todos'));
    }
  },
  // set NOTES
  [LS_SET_NOTES](state) {
    localStorage.setItem('notes', JSON.stringify(state.notes));
  },
  // get NOTES
  [LS_GET_NOTES](state) {
    if (localStorage.getItem('notes')) {
      state.notes = JSON.parse(localStorage.getItem('notes'));
    }
  },
  // set setting
  [LS_SET_SETTING](state) {
    const setting = {
      isPlayAudio: state.sidebar.setting.isPlayAudio,
      isAutoRest: state.sidebar.setting.isAutoRest,
      workTomato: state.sidebar.setting.workTomato,
      restTomato: state.sidebar.setting.restTomato,
      whiteNoiseDefault: state.sidebar.setting.whiteNoise.defaultSelect,
    };
    localStorage.setItem('setting', JSON.stringify(setting));
  },
  // get setting
  [LS_GET_SETTING](state) {
    if (localStorage.getItem('setting')) {
      const setting = JSON.parse(localStorage.getItem('setting'));
      state.sidebar.setting.isPlayAudio = setting.isPlayAudio;
      state.sidebar.setting.isAutoRest = setting.isAutoRest;
      state.sidebar.setting.workTomato = setting.workTomato;
      state.sidebar.setting.restTomato = setting.restTomato;
      state.sidebar.setting.whiteNoise.defaultSelect = setting.whiteNoiseDefault;
    }
  },
};

export default mutations;
