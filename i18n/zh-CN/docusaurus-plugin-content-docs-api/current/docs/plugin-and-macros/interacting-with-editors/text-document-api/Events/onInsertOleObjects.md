# 插入 OLE 对象回调

当内容控件的跟踪隐藏时调用的回调函数。

## 参数

| **名称** | **数据类型** | **说明** |
| --------- | ------------- | ----------- |
| data | object[] | 包含已插入 OLE 对象数据的数组。 |

```javascript
window.Asc.plugin.attachEditorEvent("onInsertOleObjects", (arrData) => {
    afterInsertOleObjects(arrData);
});
```

