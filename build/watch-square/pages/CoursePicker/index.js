let $style$633473062 = {
  "@info": {
    "styleObjectId": 633473062
  }
};
const $app_style$633473062 = $style$633473062;
const $app_script$633473062 = {
  ensureActive(current) {
    if (!current.active) {
      current.active = [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false];
    }
    while (current.active.length < 15) {
      current.active.push(false);
    }
    while (current.courses.length < 15) {
      current.courses.push("空");
    }
  },
  save(name) {
    global.loadAppData(() => {
      this.saveCourse(name);
    });
  },
  saveCourse(name) {
    const week = global.settingWeekIndex || 0;
    const index = global.currentEditIndex || 0;
    this.ensureActive(global.weekSchedule[week]);
    global.weekSchedule[week].active[index] = true;
    global.weekSchedule[week].courses[index] = name;
    global.saveAppData();
    global.router.push({
      uri: "/pages/DemoDetail"
    });
  },
  chooseChinese() {
    this.save("语文");
  },
  chooseMath() {
    this.save("数学");
  },
  chooseEnglish() {
    this.save("英语");
  },
  chooseJapanese() {
    this.save("日语");
  },
  chooseRussian() {
    this.save("俄语");
  },
  chooseKorean() {
    this.save("韩语");
  },
  chooseGerman() {
    this.save("德语");
  },
  chooseFrench() {
    this.save("法语");
  },
  chooseSpanish() {
    this.save("西班牙语");
  },
  choosePhysics() {
    this.save("物理");
  },
  chooseHistory() {
    this.save("历史");
  },
  choosePolitics() {
    this.save("政治");
  },
  chooseGeography() {
    this.save("地理");
  },
  chooseBiology() {
    this.save("生物");
  },
  chooseChemistry() {
    this.save("化学");
  },
  chooseArt() {
    this.save("美术");
  },
  chooseInfo() {
    this.save("信息技术");
  },
  choosePe() {
    this.save("体育");
  },
  chooseClub() {
    this.save("社团活动");
  },
  chooseClassMeeting() {
    this.save("班会");
  },
  chooseSelfStudy() {
    this.save("自习");
  },
  cancel() {
    global.router.back();
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$633473062.default || $app_script$633473062;
  $app_module$.exports.style = $app_style$633473062;
});
$app_bootstrap$("@app-component/index");
