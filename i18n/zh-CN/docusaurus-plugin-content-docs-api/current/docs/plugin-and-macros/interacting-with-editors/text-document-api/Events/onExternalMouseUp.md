# 外部鼠标释放事件

当鼠标按钮在插件 iframe 外部被释放时调用的函数。

## 参数

此事件无参数。

```javascript
window.Asc.plugin.attachEditorEvent("onExternalMouseUp", () => {
    let evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("mouseup", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.dispatchEvent(evt);
});
```

