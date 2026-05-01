import router from '@blueos.app.appmanager.router'

global.router = router

global.currentEditIndex = 0
global.settingWeekIndex = 0

global.appStorageKey = 'light-course-table'
global.appDataLoaded = false
global.appDataLoading = false
global.appDataCallbacks = []
global.storageApi = null

try {
  global.storageApi = require('@blueos.storage.storage')
} catch (error) {
  global.storageApi = null
}

global.weekSchedule = [
  {
    name: '周一',
    active: [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false],
    courses: ['语文', '数学', '英语', '体育', '历史', '生物', '班会', '空', '空', '空', '空', '空', '空', '空', '空'],
  },
  {
    name: '周二',
    active: [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false],
    courses: ['数学', '语文', '地理', '英语', '美术', '物理', '自习', '空', '空', '空', '空', '空', '空', '空', '空'],
  },
  {
    name: '周三',
    active: [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false],
    courses: ['英语', '数学', '物理', '化学', '语文', '信息技术', '社团活动', '空', '空', '空', '空', '空', '空', '空', '空'],
  },
  {
    name: '周四',
    active: [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false],
    courses: ['语文', '政治', '数学', '英语', '美术', '劳动', '自习', '空', '空', '空', '空', '空', '空', '空', '空'],
  },
  {
    name: '周五',
    active: [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false],
    courses: ['语文', '数学', '物理', '体育', '英语', '放学', '休息', '空', '空', '空', '空', '空', '空', '空', '空'],
  },
  {
    name: '周六',
    active: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    courses: ['休息', '休息', '休息', '休息', '休息', '休息', '休息', '空', '空', '空', '空', '空', '空', '空', '空'],
  },
  {
    name: '周日',
    active: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    courses: ['休息', '休息', '休息', '休息', '休息', '休息', '休息', '空', '空', '空', '空', '空', '空', '空', '空'],
  },
]

const emptyCourse = '空'

function ensureScheduleItem(item) {
  if (!item.active) {
    item.active = [true, true, true, true, true, true, true, false, false, false, false, false, false, false, false]
  }
  while (item.active.length < 15) {
    item.active.push(false)
  }
  while (item.courses.length < 15) {
    item.courses.push(emptyCourse)
  }
}

function compactScheduleItem(item) {
  const courses = []
  ensureScheduleItem(item)
  for (let index = 0; index < 15; index++) {
    if (item.active[index]) {
      courses.push(item.courses[index] || emptyCourse)
    }
  }
  for (let index = 0; index < 15; index++) {
    item.active[index] = index < courses.length
    item.courses[index] = courses[index] || emptyCourse
  }
}

function compactWeekSchedule() {
  global.weekSchedule.forEach((item) => {
    compactScheduleItem(item)
  })
}

global.getAppDataText = function() {
  compactWeekSchedule()
  return JSON.stringify({
    weekSchedule: global.weekSchedule,
  })
}

global.runAppDataCallbacks = function() {
  const callbacks = global.appDataCallbacks
  global.appDataCallbacks = []
  callbacks.forEach((callback) => {
    callback()
  })
}

global.finishAppDataLoad = function() {
  global.appDataLoaded = true
  global.appDataLoading = false
  global.runAppDataCallbacks()
}

global.applyAppData = function(data) {
  if (!data) {
    return
  }
  if (data.weekSchedule) {
    global.weekSchedule = data.weekSchedule
    compactWeekSchedule()
  }
}

global.applyAppDataText = function(text) {
  if (!text) {
    return
  }
  try {
    global.applyAppData(JSON.parse(text))
  } catch (error) {}
}

global.saveAppData = function() {
  const text = global.getAppDataText()

  if (global.storageApi && global.storageApi.set) {
    global.storageApi.set({
      key: global.appStorageKey,
      value: text,
      success: function() {
        console.log('save storage success')
      },
      fail: function(data, code) {
        console.log('save storage fail: ' + code)
      },
    })
    return
  }

  console.log('no storage api')
}

global.loadAppData = function(callback) {
  if (callback) {
    global.appDataCallbacks.push(callback)
  }
  if (global.appDataLoaded) {
    global.runAppDataCallbacks()
    return
  }
  if (global.appDataLoading) {
    return
  }

  global.appDataLoading = true

  if (global.storageApi && global.storageApi.getSync) {
    try {
      global.applyAppDataText(global.storageApi.getSync({
        key: global.appStorageKey,
      }))
    } catch (error) {}
    global.finishAppDataLoad()
    return
  }

  if (global.storageApi && global.storageApi.get) {
    global.storageApi.get({
      key: global.appStorageKey,
      default: '',
      success: function(data) {
        global.applyAppDataText(data)
        global.finishAppDataLoad()
      },
      fail: function(data, code) {
        console.log('load storage fail: ' + code)
        global.finishAppDataLoad()
      },
    })
    return
  }

  global.finishAppDataLoad()
}

global.loadAppData()
