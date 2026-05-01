let $style$465862127 = {
  "@info": {
    "styleObjectId": 465862127
  }
};
const $app_style$465862127 = $style$465862127;
const $app_script$465862127 = {
  data: function dataFun() {
    return {
      weekIndex: 0,
      weekName: "",
      canAdd: false,
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
      this.load();
    });
  },
  onShow() {
    global.loadAppData(() => {
      this.load();
    });
  },
  onRefresh() {
    global.loadAppData(() => {
      this.load();
    });
  },
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
  compactCurrent(current) {
    const courses = [];
    this.ensureActive(current);
    for (let index = 0; index < 15; index++) {
      if (current.active[index]) {
        courses.push(current.courses[index] || "空");
      }
    }
    for (let index = 0; index < 15; index++) {
      current.active[index] = index < courses.length;
      current.courses[index] = courses[index] || "空";
    }
  },
  load() {
    this.weekIndex = global.settingWeekIndex || 0;
    const current = global.weekSchedule[this.weekIndex];
    this.ensureActive(current);
    this.weekName = current.name;
    this.c1 = current.courses[0];
    this.c2 = current.courses[1];
    this.c3 = current.courses[2];
    this.c4 = current.courses[3];
    this.c5 = current.courses[4];
    this.c6 = current.courses[5];
    this.c7 = current.courses[6];
    this.c8 = current.courses[7];
    this.c9 = current.courses[8];
    this.c10 = current.courses[9];
    this.c11 = current.courses[10];
    this.c12 = current.courses[11];
    this.c13 = current.courses[12];
    this.c14 = current.courses[13];
    this.c15 = current.courses[14];
    this.r1 = current.active[0];
    this.r2 = current.active[1];
    this.r3 = current.active[2];
    this.r4 = current.active[3];
    this.r5 = current.active[4];
    this.r6 = current.active[5];
    this.r7 = current.active[6];
    this.r8 = current.active[7];
    this.r9 = current.active[8];
    this.r10 = current.active[9];
    this.r11 = current.active[10];
    this.r12 = current.active[11];
    this.r13 = current.active[12];
    this.r14 = current.active[13];
    this.r15 = current.active[14];
    this.canAdd = !this.r1 || !this.r2 || !this.r3 || !this.r4 || !this.r5 || !this.r6 || !this.r7 || !this.r8 || !this.r9 || !this.r10 || !this.r11 || !this.r12 || !this.r13 || !this.r14 || !this.r15;
  },
  edit(index) {
    global.currentEditIndex = index;
    global.router.push({
      uri: "/pages/CoursePicker"
    });
  },
  clear(index) {
    const current = global.weekSchedule[this.weekIndex];
    this.compactCurrent(current);
    const courses = [];
    for (let itemIndex = 0; itemIndex < 15; itemIndex++) {
      if (current.active[itemIndex] && itemIndex !== index) {
        courses.push(current.courses[itemIndex]);
      }
    }
    for (let itemIndex = 0; itemIndex < 15; itemIndex++) {
      current.active[itemIndex] = itemIndex < courses.length;
      current.courses[itemIndex] = courses[itemIndex] || "空";
    }
    global.saveAppData();
    this.load();
  },
  addCourse() {
    const current = global.weekSchedule[this.weekIndex];
    this.ensureActive(current);
    for (let index = 0; index < current.active.length; index++) {
      if (!current.active[index]) {
        current.active[index] = true;
        current.courses[index] = "语文";
        global.currentEditIndex = index;
        global.saveAppData();
        this.load();
        global.router.push({
          uri: "/pages/CoursePicker"
        });
        return;
      }
    }
  },
  edit1() {
    this.edit(0);
  },
  edit2() {
    this.edit(1);
  },
  edit3() {
    this.edit(2);
  },
  edit4() {
    this.edit(3);
  },
  edit5() {
    this.edit(4);
  },
  edit6() {
    this.edit(5);
  },
  edit7() {
    this.edit(6);
  },
  edit8() {
    this.edit(7);
  },
  edit9() {
    this.edit(8);
  },
  edit10() {
    this.edit(9);
  },
  edit11() {
    this.edit(10);
  },
  edit12() {
    this.edit(11);
  },
  edit13() {
    this.edit(12);
  },
  edit14() {
    this.edit(13);
  },
  edit15() {
    this.edit(14);
  },
  delete1() {
    this.clear(0);
  },
  delete2() {
    this.clear(1);
  },
  delete3() {
    this.clear(2);
  },
  delete4() {
    this.clear(3);
  },
  delete5() {
    this.clear(4);
  },
  delete6() {
    this.clear(5);
  },
  delete7() {
    this.clear(6);
  },
  delete8() {
    this.clear(7);
  },
  delete9() {
    this.clear(8);
  },
  delete10() {
    this.clear(9);
  },
  delete11() {
    this.clear(10);
  },
  delete12() {
    this.clear(11);
  },
  delete13() {
    this.clear(12);
  },
  delete14() {
    this.clear(13);
  },
  delete15() {
    this.clear(14);
  },
  backHome() {
    global.router.back();
  }
};
$app_define$("@app-component/index", [], function($app_require$, $app_exports$, $app_module$) {
  $app_module$.exports = $app_script$465862127.default || $app_script$465862127;
  $app_module$.exports.style = $app_style$465862127;
});
$app_bootstrap$("@app-component/index");
