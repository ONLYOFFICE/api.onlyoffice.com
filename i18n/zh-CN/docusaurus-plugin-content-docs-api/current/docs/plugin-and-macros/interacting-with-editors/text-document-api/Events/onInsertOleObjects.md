# onInsertOleObjects

当一个或多个 OLE 对象插入文档时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| data | object[] | 包含已插入 OLE 对象信息的数组。 |

```javascript
window.Asc.plugin.attachEditorEvent("onInsertOleObjects", (arrData) => {
    afterInsertOleObjects(arrData);
});
```

