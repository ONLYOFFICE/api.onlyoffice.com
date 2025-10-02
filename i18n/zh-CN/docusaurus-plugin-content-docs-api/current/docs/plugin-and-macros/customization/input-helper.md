---
sidebar_position: -2
---

# 输入辅助

插件可以创建自己的窗口，该窗口在您输入文本时显示或隐藏。其位置与光标绑定。

![Input helper](/assets/images/plugins/input-helper.png)

## 创建输入辅助 {#creating-an-input-helper}

要创建输入辅助，请使用 **createInputHelper** 方法。

参数：此方法无参数。

返回值：此方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.init = (text) => {
  if (!window.isInit) {
    window.isInit = true
    window.Asc.plugin.currentContentControl = null
    window.Asc.plugin.createInputHelper()
    window.Asc.plugin.getInputHelper().createWindow()
  }
}
```

## 获取输入辅助 {#getting-an-input-helper}

要获取 [InputHelper object](#inputhelper)，请使用 **getInputHelper** 方法。

参数：此方法无参数。

返回值：类型为 [InputHelper](#inputhelper)

示例:

``` ts
window.Asc.plugin.init = (text) => {
  if (!window.isInit) {
    window.isInit = true
    window.Asc.plugin.currentContentControl = null
    window.Asc.plugin.createInputHelper()
    window.Asc.plugin.getInputHelper().createWindow()
  }
}
```

## 显示输入辅助 {#showing-an-input-helper}

要显示输入辅助，请使用 *window.Asc.plugin.executeMethod* 的 **ShowInputHelper** 方法。

参数:

| 名称             | 类型    | 描述                                                                                       |
| ---------------- | ------- | ------------------------------------------------------------------------------------------ |
| *guid*           | string  | 一个字符串值，指定插件标识符，必须是 *asc.\{UUID\}* 类型。                                   |
| *w*              | number  | 一个数字，指定窗口宽度，单位为毫米。                                                      |
| *h*              | number  | 一个数字，指定窗口高度，单位为毫米。                                                      |
| *isKeyboardTake* | boolean | 定义键盘是否被捕获，(**true**) 表示捕获，(**false**) 表示未捕获。                          |

返回值：此方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.executeMethod("ShowInputHelper", ["asc.{UUID}", 70, 70, true])
```

## 隐藏输入辅助 {#unshowing-an-input-helper}

要隐藏输入辅助，使用 *window.Asc.plugin.executeMethod* 的 **UnShowInputHelper** 方法。

参数:

| 名称        | 类型     | 描述                                            |
| --------- | ------ | --------------------------------------------- |
| *guid*    | string | 一个字符串值，指定插件标识符，必须是 *asc.\{UUID}\* 类型。           |
| *isclear* | string | 定义输入上下文是否会被清除（**true** 表示清除，**false** 表示不清除）。 |

返回值：此方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.executeMethod("UnShowInputHelper", ["asc.{UUID}", true])
```

## 输入辅助 {#inputhelper}

表示输入辅助的类。

### 方法 {#methods}

#### 创建窗口 {#createwindow}

创建一个输入辅助窗口。

参数：此方法不带任何参数。

返回值：此方法不返回任何值。

示例：

``` ts
window.Asc.plugin.init = (text) => {
  if (!window.isInit) {
    window.isInit = true
    window.Asc.plugin.currentText = ""
    window.Asc.plugin.createInputHelper()
    window.Asc.plugin.getInputHelper().createWindow()
  }
}
```

#### 获取项 {#getitems}

返回一个包含输入辅助中所有项的 [InputHelperItem](#inputhelperitem) 对象数组。

参数：此方法不带任何参数。

返回值：类型为数组.\<[InputHelperItem](#inputhelperitem)\>

示例：

``` ts
function getInputHelperSize() {
  const size = window.Asc.plugin.getInputHelper().getScrollSizes()
  let width = 150
  let height = size.h
  const inputHelper = window.Asc.plugin.getInputHelper()
  const heightMin = inputHelper.getItemsHeight(Math.min(5, inputHelper.getItems().length))
  if (width > 400) {
    width = 400
  }
  if (height > heightMin) {
    height = heightMin
    width += 30
    return {w: width, h: height}
  }
}
```

#### 获取滚动尺寸 {#getscrollsizes}

返回输入辅助滚动窗口的尺寸。返回一个包含宽度和高度参数的对象。

参数：此方法不接受任何参数。

返回值：类型为数字

示例：

``` ts
function getInputHelperSize() {
  const size = window.Asc.plugin.getInputHelper().getScrollSizes()
  let width = 200
  let height = size.h
  const inputHelper = window.Asc.plugin.getInputHelper()
  const heightMin = inputHelper.getItemsHeight(Math.min(5, inputHelper.getItems().length))
  if (width > 400) {
    width = 400
  }
  if (height > heightMin) {
    height = heightMin
    width += 30
    return {w: width, h: height}
  }
}
```

#### 设置条目 {#setitems}

为输入辅助设置条目。

参数：

| 名称    | 类型                                       | 描述                                                                                                                 |
| ------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| *items* | Array.\<[InputHelperItem](#inputhelperitem)\> | 定义一个包含所有输入辅助条目的 [InputHelperItem](#inputhelperitem) 对象数组。                                          |

返回值：此方法不返回任何值。

示例:

``` ts
const items = [
  {text: "Name1.Family1", id: "0"},
  {text: "Name3.Family3", id: "2"},
  {text: "Name4.Family4", id: "3"},
  {text: "Name5.Family5", id: "4"},
  {text: "Name6.Family6", id: "5"},
  {text: "Name7.Family7", id: "6"},
  {text: "Name8.Family8", id: "7"},
  {text: "Name9.Family9", id: "8"},
  {text: "Name2.Family2", id: "1"},
  {text: "Name10.Family10", id: "9"},
  {text: "Name11.Family11", id: "10"},
  {text: "Name12.Family12", id: "11"},
  {text: "Name13.Family13", id: "12"},
];
window.Asc.plugin.getInputHelper().setItems(items);
const sizes = getInputHelperSize();
window.Asc.plugin.getInputHelper().show(_sizes.w, _sizes.h, true);
```

#### 显示 {#show}

显示输入辅助。

参数：

| 名称               | 类型    | 描述                                                       |
| ------------------ | ------- | ---------------------------------------------------------- |
| *width*            | number  | 输入辅助窗口宽度，单位为毫米。                              |
| *height*           | number  | 输入辅助窗口高度，单位为毫米。                              |
| *isCaptureKeyboard*| boolean | 定义是否捕获键盘（true 捕获，false 不捕获）。              |

返回：此方法无返回值。

示例：

``` ts
const items = [
  {text: "Name1.Family1", id: "0"},
  {text: "Name2.Family2", id: "1"},
  {text: "Name3.Family3", id: "2"},
  {text: "Name4.Family4", id: "3"},
  {text: "Name5.Family5", id: "4"},
  {text: "Name6.Family6", id: "5"},
  {text: "Name7.Family7", id: "6"},
  {text: "Name8.Family8", id: "7"},
  {text: "Name9.Family9", id: "8"},
  {text: "Name10.Family10", id: "9"},
  {text: "Name11.Family11", id: "10"},
  {text: "Name12.Family12", id: "11"},
  {text: "Name13.Family13", id: "12"},
];
window.Asc.plugin.getInputHelper().setItems(items);
const sizes = getInputHelperSize();
window.Asc.plugin.getInputHelper().show(_sizes.w, _sizes.h, true);
```

#### 不显示 {#unshow}

隐藏输入辅助。

参数：此方法不带任何参数。

返回值：此方法不返回任何数据。

示例：

``` ts
window.Asc.plugin.executeMethod("SelectContentControl", [window.Asc.plugin.currentContentControl.InternalId], () => {
  window.Asc.plugin.executeMethod("InputText", [item.text])
  window.Asc.plugin.getInputHelper().unShow()
})
```

## 输入辅助项 {#inputhelperitem}

定义输入辅助项。  

类型: object（对象） 

属性:  

| 名称    | 类型     | 描述         |  
| ------- | -------- | ------------ |  
| *id*    | string   | 项的索引。   |  
| *text*  | string   | 项的文本。   |  

示例:

``` ts
const items = [
  {text: "Name1.Family1", id: "0"},
  {text: "Name2.Family2", id: "1"},
  {text: "Name3.Family3", id: "2"},
  {text: "Name4.Family4", id: "3"},
  {text: "Name5.Family5", id: "4"},
  {text: "Name6.Family6", id: "5"},
  {text: "Name7.Family7", id: "6"},
  {text: "Name8.Family8", id: "7"},
  {text: "Name9.Family9", id: "8"},
  {text: "Name10.Family10", id: "9"},
  {text: "Name11.Family11", id: "10"},
  {text: "Name12.Family12", id: "11"},
  {text: "Name13.Family13", id: "12"},
]
window.Asc.plugin.getInputHelper().setItems(items)
const sizes = getInputHelperSize()
window.Asc.plugin.getInputHelper().show(_sizes.w, _sizes.h, true)
```
