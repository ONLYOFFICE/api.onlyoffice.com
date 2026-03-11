# onEnableMouseEvent

用于开启/关闭鼠标或触控板事件的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| isEnabled | boolean | 指示鼠标或触控板是否启用（**true**）或禁用（**false**）。 |

```javascript
window.Asc.plugin.attachEditorEvent("onEnableMouseEvent", (isEnabled) => {
    let _frames = document.getElementsByTagName("iframe");
    if (_frames && _frames[0]) {
        _frames[0].style.pointerEvents = isEnabled ? "none" : "";
    }
});
```

