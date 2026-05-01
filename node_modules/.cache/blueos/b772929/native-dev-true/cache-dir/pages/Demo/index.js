let $style$1302357824 = {
  "@info": {
    "styleObjectId": 1302357824
  }
};
const $app_style$1302357824 = $style$1302357824;
const $app_script$1302357824 = {
  data: function dataFun() {
    return {
      weekIndex: 0,
      touchY: 0,
      weekName: "周一",
      quoteText: "",
      quotes: ["长风破浪会有时 直挂云帆济沧海", "千磨万击还坚劲 任尔东西南北风", "会当凌绝顶 一览众山小", "欲穷千里目 更上一层楼", "少壮不努力 老大徒伤悲", "路漫漫其修远兮 吾将上下而求索", "沉舟侧畔千帆过 病树前头万木春", "不经一番寒彻骨 怎得梅花扑鼻香", "纸上得来终觉浅 绝知此事要躬行", "宝剑锋从磨砺出 梅花香自苦寒来", "黑发不知勤学早 白首方悔读书迟", "读书不觉已春深 一寸光阴一寸金", "少年易老学难成 一寸光阴不可轻", "大鹏一日同风起 扶摇直上九万里", "天生我材必有用 千金散尽还复来", "黄沙百战穿金甲 不破楼兰终不还", "莫愁前路无知己 天下谁人不识君", "山重水复疑无路 柳暗花明又一村", "春风得意马蹄疾 一日看尽长安花", "海阔凭鱼跃 天高任鸟飞", "读书破万卷 下笔如有神", "精诚所至 金石为开", "博观而约取 厚积而薄发", "及时当勉励 岁月不待人", "丈夫志四海 万里犹比邻", "穷且益坚 不坠青云之志", "老骥伏枥 志在千里", "烈士暮年 壮心不已", "莫等闲 白了少年头", "人生在勤 不索何获"],
      c1: "",
      c2: "",
      c3: "",
      c4: "",
      c5: "",
      c6: "",
      c7: "",
      c8: "",
      c9: "",
      c10: "",
      c11: "",
      c12: "",
      c13: "",
      c14: "",
      c15: "",
      r1: true,
      r2: true,
      r3: true,
      r4: true,
      r5: true,
      r6: true,
      r7: true,
      r8: false,
      r9: false,
      r10: false,
      r11: false,
      r12: false,
      r13: false,
      r14: false,
      r15: false
    };
  },
  onInit() {
    global.loadAppData(() => {
      this.useTodayWeekday();
    });
  },
  onShow() {
    global.loadAppData(() => {
      this.loadCourses();
    });
  },
  useTodayWeekday() {
    const now = /* @__PURE__ */ new Date();
    const day = now.getDay();
    this.weekIndex = day === 0 ? 6 : day - 1;
    const quoteIndex = now.getTime() % this.quotes.length;
    this.quoteText = this.quotes[quoteIndex];
    this.loadCourses();
  },
  ensureActive(item) {
    if (!item.active) {
      item.active = [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false];
    }
    while (item.active.length < 15) {
      item.active.push(false);
    }
    while (item.courses.length < 15) {
      item.courses.push("空");
    }
  },
  loadCourses() {
    const item = global.weekSchedule[this.weekIndex];
    this.ensureActive(item);
    this.weekName = item.name;
    this.c1 = item.courses[0];
    this.c2 = item.courses[1];
    this.c3 = item.courses[2];
    this.c4 = item.courses[3];
    this.c5 = item.courses[4];
    this.c6 = item.courses[5];
    this.c7 = item.courses[6];
    this.c8 = item.courses[7];
    this.c9 = item.courses[8];
    this.c10 = item.courses[9];
    this.c11 = item.courses[10];
    this.c12 = item.courses[11];
    this.c13 = item.courses[12];
    this.c14 = item.courses[13];
    this.c15 = item.courses[14];
    this.r1 = item.active[0];
    this.r2 = item.active[1];
    this.r3 = item.active[2];
    this.r4 = item.active[3];
    this.r5 = item.active[4];
    this.r6 = item.active[5];
    this.r7 = item.active[6];
    this.r8 = item.active[7];
    this.r9 = item.active[8];
    this.r10 = item.active[9];
    this.r11 = item.active[10];
    this.r12 = item.active[11];
    this.r13 = item.active[12];
    this.r14 = item.active[13];
    this.r15 = item.active[14];
  },
  touchStart(event) {
    const touch = event.touches && event.touches[0];
    this.touchY = touch ? touch.pageY : event.pageY || 0;
  },
  touchEnd(event) {
    const touch = event.changedTouches && event.changedTouches[0];
    const endY = touch ? touch.pageY : event.pageY || 0;
    const diff = endY - this.touchY;
    if (diff > 35) {
      this.prevWeek();
    } else if (diff < -35) {
      this.nextWeek();
    }
  },
  prevWeek() {
    this.weekIndex = this.weekIndex === 0 ? 6 : this.weekIndex - 1;
    this.loadCourses();
  },
  nextWeek() {
    this.weekIndex = this.weekIndex === 6 ? 0 : this.weekIndex + 1;
    this.loadCourses();
  },
  openSetting() {
    global.settingWeekIndex = this.weekIndex;
    global.router.push({
      uri: "/pages/DemoDetail"
    });
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$1302357824.default || $app_script$1302357824;
  $app_module$.exports.style = $app_style$1302357824;
});
$app_bootstrap$("@app-component/index");
