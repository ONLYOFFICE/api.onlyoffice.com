---
sidebar_position: -1
---

# 内容控件按钮

从 9.0 版本开始，您可以使用 `Asc.ButtonContentControl` 类为内容控件添加自定义按钮：

``` ts
let button = new Asc.ButtonContentControl();
```

## icons

`类型: string`

设置按钮上显示的图标路径。

**示例**:

``` ts
button.icons = "/resources/check%scale%(default).png";
```

## attachOnClick

`类型: function`

定义按钮被点击时需要执行的操作。

### 参数

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| contentControlId | `string` | 按钮所属内容控件的 ID。 |

**示例**:

``` ts
button.attachOnClick((contentControlId) => {
  Asc.plugin.executeMethod("RemoveContentControl", [contentControlId]);
});
```

## 示例

``` ts
(function (window) {
  window.Asc.plugin.init = () => {
    let button = new Asc.ButtonContentControl();
    button.icons = "/resources/check%scale%(default).png";
    button.attachOnClick((contentControlId) => {
      Asc.plugin.executeMethod("RemoveContentControl", [contentControlId]);
    });

    button = new Asc.ButtonContentControl();
    button.icons = "/resources/close%scale%(default).png";
    button.attachOnClick((contentControlId) => {
      Asc.plugin.executeMethod("RemoveContentControls", [[{ InternalId: contentControlId }]]);
    });
  };
})(window);
```
