# 内容控件变更回调

当内容控件发生更改时调用的回调函数。

## 参数

| **名称** | **数据类型** | **说明** |
| --------- | ------------- | ----------- |
| control | [事件_内容控件](../Enumeration/Event_ContentControl.md) | 指明已发生更改的内容控件。 |

```javascript
window.Asc.plugin.attachEditorEvent("onChangeContentControl", (control) => {
    changeContentControl(control);
});
```

