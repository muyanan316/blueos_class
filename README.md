# 课表

一款适用于 BlueOS 智能手表的轻量课表应用。

## 功能

- 自动识别当天星期，并显示对应课程。
- 周课表固定重复使用，不按具体日期生成新课表。
- 支持上/下一天切换查看不同星期课表。
- 支持编辑课程、删除课程、删除后自动补位。
- 支持最多 15 节课程。
- 支持课程选择：语文、数学、英语、日语、俄语、韩语、德语、法语、西班牙语、物理、历史、政治、地理、生物、化学、美术、信息技术、体育、社团活动、班会、自习。

## 项目结构

```text
src
├── assets
│   ├── images
│   │   ├── background-fixed.png
│   │   └── logo.png
│   └── styles
├── pages
│   ├── Demo          主页面
│   ├── DemoDetail    设置页面
│   └── CoursePicker  课程选择页面
├── app.ux
├── global.js
└── manifest.json
```

## 使用

使用 BlueOS Studio 打开项目后编译运行即可。

如需更换主页面图片，替换：

```text
src/assets/images/background-fixed.png
```

本人实力有限，只能写死了，有能力的自己克隆仓库改为自己打包

当前真机适配方案是使用固定尺寸图片，避免部分手表真机对动态图片样式支持不稳定。

## 作者

沐言暗

## 反馈

有问题可以邮箱反馈，感谢您的支持。

```text
pure.shimi@gmail.com
```

## 仓库

```text
https://github.com/muyanan316/blueos_class
```
