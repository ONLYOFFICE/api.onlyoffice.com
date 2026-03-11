# onFocusContentControl

用于显示哪个内容控件已获得焦点的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| control | [Event_ContentControl](../Enumeration/Event_ContentControl.md) | 定义已获得焦点的内容控件。 |

```javascript
window.Asc.plugin.attachEditorEvent("onFocusContentControl", (control) => {
    focusContentControl(control);
});
```

