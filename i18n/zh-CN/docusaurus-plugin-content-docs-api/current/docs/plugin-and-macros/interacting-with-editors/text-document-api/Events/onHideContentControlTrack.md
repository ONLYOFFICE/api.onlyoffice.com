# 内容控件焦点变化回调

当内容控件的焦点发生改变时调用的回调函数。

## 参数

| **名称** | **数据类型** | **说明** |
| --------- | ------------- | ----------- |
| ids | string[] | 失去焦点的内容控件 ID 数组。 |

```javascript
window.Asc.plugin.attachEditorEvent("onHideContentControlTrack", (ids) => {
    onHideContentControlTrack(ids);
});
```

