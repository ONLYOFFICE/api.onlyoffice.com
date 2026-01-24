---
sidebar_position: -1
description: 了解如何使用提供的 CSS 类和组件来设计 ONLYOFFICE 插件界面的样式。
---

# 样式

ONLYOFFICE 提供了用于不同界面元素的样式表。若要使你的插件界面适配 ONLYOFFICE 的样式，可以在 [index.html](../structure/entry-point.md) 文件中通过以下链接引入 [plugin.css](https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css) 文件：

``` html
<link rel="stylesheet" href="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.css">
```

为了保持用户插件界面的一致性，您可以使用一组专为生成插件 UI 设计的预构建基础组件。您可以在我们的 [Storybook](https://onlyoffice.github.io/storybook/static/) 中探索组件功能，并进行交互。

所有可用的控件也都在[**控件示例**](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_controls)插件中展示：

![控件示例](/assets/images/plugins/controls.png)

## 按钮

用于用户交互的按钮组件。

:::note
按钮颜色由开发者自行选择。按钮颜色越深，表示其重要性越高。通常，`btn-text-default.submit.primary` 类的按钮用于确认操作并提交结果（例如，**确认**按钮）。
:::

### btn-text-default

`类型: class`

为您的插件添加默认的白色按钮样式。

**示例**:

``` html
<button class="btn-text-default" style="width:75px;">Button 1</button>
```

**CSS 参数**:

``` css
.btn-text-default {
    background: #fff;
    border: 1px solid #cfcfcf;
    border-radius: 2px;
    color: #444444;
    font-size: 11px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: 22px;
    cursor: pointer;
}
```

![Button 1](/assets/images/plugins/button-1.png)

### btn-text-default.submit.primary

`类型: class`

为您的插件添加主要的深灰色按钮样式。用于确认操作并提交结果。

**示例**:

``` html
<button class="btn-text-default submit primary" style="width:75px;">Button 2</button>
```

**CSS 参数**:

``` css
.btn-text-default.submit.primary {
    color: #fff;
    background-color: #7d858c;
}
```

![Button 2](/assets/images/plugins/button-2.png)

### btn-text-default.submit

`类型: class`

为您的插件添加浅灰色按钮样式。

**示例**:

``` html
<button class="btn-text-default submit" style="width:75px;">Button 3</button>
```

**CSS 参数**:

``` css
.btn-text-default.submit {
    font-weight: bold;
    background-color: #d8dadc;
    border: 1px solid transparent;
}
```

![Button 3](/assets/images/plugins/button-3.png)

### btn-edit

`类型: class`

为您的插件添加编辑按钮图标。

**示例**:

``` html
<label class="for-combo">Edit button</label><div class="btn-edit" style="display: inline-block; margin-left: 10px;"></div>
```

**CSS 参数**:

``` css
.btn-edit {
    width: 13px;
    height: 13px;
    cursor: pointer;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGZSURBVHgBfZI/y4FRGMavx7+SRQaTTQab74CVlBKL/FukDGQhEgsDNh/Apiw+gcXm70DJoEikKMUk7vec8/Yi75O7Tj2d+/4913Wuc6Tz+UyQqev1itvtBr1e/6+nkgP2+z0qlYr4DgaDsNls36HtdotisYhoNAqLxYJyuSz230HFO7DZbISC0+lEp9OBRqNBLpdDq9XCeDx+DfIz8TWZTIhZodFoRMvlknw+H8XjcdrtdrRarYgpU6/XE7MC4oMc4OB8Pie/30/ZbJba7TYlk0k6HA4CDIVCxNyQYrFYoNFoIJ1OQ5Ik5PN5WK1WpFIprNdr8H61WhVn5X2VisXg8XhoNpvRYDAgt9tNbICOxyOVSiVyuVzU7/epXq9TIBAQtrkzxeVygclkQrfbhd1uRzgcRq1Ww3A4FKparRbspyJRo9H4G4TD4RD06XQS3pkt8nq9NJ1OiSVGsVjsqfC3nvekVCrxeDxgMBgQiUTEa2g2m8hkMi8FuXtSq9VIJBK43+8iHB7GJ8BL4vY+N3U6HQqFAsxmM+TqB5Je/SVNoN18AAAAAElFTkSuQmCC');
}
```

![Edit button](/assets/images/plugins/edit_button.png)

## 输入控件

用于用户数据输入的输入组件。

### textarea

`类型: element`

为您的插件添加文本区域输入字段。

**示例**:

``` html
<textarea style="height:45px;width: 100%;" class="form-control" placeholder="textarea control"></textarea>
```

**CSS 参数**:

``` css
textarea.form-control {
    resize: none;
}
```

![Textarea](/assets/images/plugins/text_area.png)

### input[type="text"]

`类型: element`

为您的插件添加文本输入字段。

**示例**:

``` html
<input type="text" class="form-control" placeholder="text field" style="width: 100%;margin-bottom: 2px;">
```

**CSS 参数**:

``` css
.form-control {
    border: 1px solid #cfcfcf;
    border-radius: 2px;
    box-sizing: border-box;
    color: #444444;
    font-size: 11px;
    height: 22px;
    padding: 1px 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
}
```

![Text field](/assets/images/plugins/text_field.png)

### input[type="checkbox"]

`类型: element`

为您的插件添加复选框输入。

**示例**:

``` html
<input type="checkbox" class="form-control" style="vertical-align: middle;"><label style="margin-left: 5px;vertical-align: middle;">Checkbox</label>
```

**CSS 参数**:

``` css
input[type='checkbox '].form-control {
    height: auto;
    margin: 0;
}
```

![Checkbox](/assets/images/plugins/checkbox_example.png)

## 标签控件

用于文本显示的标签组件。

### label.header

`类型: class`

为您的插件添加加粗标题标签。

**示例**:

``` html
<label class="header">Header label</label>
```

**CSS 参数**:

``` css
label.header {
    font-weight: bold;
}
```

### label.link

`类型: class`

为您的插件添加链接样式的标签。

**示例**:

``` html
<label class="link">Link label</label>
```

**CSS 参数**:

``` css
label.link {
    border-bottom: 1px dotted #aaa;
    cursor: pointer;
}
```

## 下拉组合框

`类型: function`

使用 [select2](https://select2.org/) 库为您的插件添加下拉组合框。

**示例**:

``` html
<select id="select_example" class="" ></select>
$('#select_example').select2({
    data : [{id:0, text:'Item 1'}, {id:1, text:'Item 2'}, {id:2, text:'Item 3'}],
    minimumResultsForSearch: Infinity,
    width : '120px'
});
```

![Combobox](/assets/images/plugins/combobox_example.png)

## 加载器

`类型: class`

为您的插件添加加载器容器，用于显示加载状态。

**示例**:

``` html
<div id="loader-container" class="asc-loader-container" style="margin: 10px; height: 40px; border: 1px solid #cfcfcf;"></div>
```

**CSS 参数**:

``` css
.asc-loader-container {
    position: relative;
}
```

![Loader](/assets/images/plugins/loader_example.png)

## 示例

此示例演示如何在 YouTube 插件中添加符合 ONLYOFFICE 风格的界面元素。

![YouTube plugin](/assets/images/plugins/youtube_interface.png)

``` html
<!-- 默认白色按钮 -->
<button class="btn-text-default" style="width:30px;">OK</button>

<!-- 文本输入框 -->
<input type="text" class="form-control" style="width:100%;">

<!-- 主要深灰色按钮 -->
<button class="btn-text-default submit primary" style="width:90px;">Ok</button>

<!-- 浅灰色取消按钮 -->
<button class="btn-text-default submit" style="margin-left:5px; width:90px;">Cancel</button>
```
