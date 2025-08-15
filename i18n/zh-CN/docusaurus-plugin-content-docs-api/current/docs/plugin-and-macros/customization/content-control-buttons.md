---
sidebar_position: -1
---

# 内容控件按钮

从 9.0 版本开始，您可以使用 `Asc.ButtonContentControl` 类为内容控件添加自定义按钮：

``` ts
let button = new Asc.ButtonContentControl();
```

- 使用 `icons` 属性设置按钮上显示的图标路径：

``` ts
button.icons = '/resources/check%scale%(default).png';
```

- 使用 `attachOnClick` 方法定义按钮被点击时需要执行的操作：

``` ts
button.attachOnClick(function(contentControlId){
    Asc.plugin.executeMethod("RemoveContentControl", [contentControlId]);
});
```

## 示例

``` ts
(function(window){
  window.Asc.plugin.init = function()
  {
    let button = new Asc.ButtonContentControl();
    button.icons = '/resources/check%scale%(default).png';
    button.attachOnClick(function(contentControlId){
      Asc.plugin.executeMethod("RemoveContentControl", [contentControlId]);
    });
 
    button = new Asc.ButtonContentControl();
    button.icons = '/resources/close%scale%(default).png';
    button.attachOnClick(function(contentControlId){
      Asc.plugin.executeMethod("RemoveContentControls", [[{"InternalId": contentControlId}]]);
    });
  }
})(window);
```
