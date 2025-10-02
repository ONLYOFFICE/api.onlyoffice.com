# 内容控件跟踪显示回调

当内容控件的跟踪条出现时调用的回调函数。

## 参数

| **名称** | **数据类型** | **说明** |
| --------- | ------------- | ----------- |
| ids | string[] | 获得焦点的内容控件 ID 数组。 |

```javascript
window.Asc.plugin.attachEditorEvent("onHideContentControlTrack", (ids) => {
    onShowContentControlTrack(ids);
});
```

