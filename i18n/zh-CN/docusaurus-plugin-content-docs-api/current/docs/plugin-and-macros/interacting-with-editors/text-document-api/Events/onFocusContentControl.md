# 内容控件获得焦点回调

当某个内容控件获得焦点时调用的回调函数。

## 参数

| **名称** | **数据类型** | **说明** |
| --------- | ------------- | ----------- |
| control | [事件_内容控件](../Enumeration/Event_ContentControl.md) | 指明已获得焦点的内容控件。 |

```javascript
window.Asc.plugin.attachEditorEvent("onFocusContentControl", (control) => {
    focusContentControl(control);
});
```

