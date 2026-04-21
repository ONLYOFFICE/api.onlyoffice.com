# onInsertOleObjects

当一个或多个 OLE 对象插入文档时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| data | object[] | 包含已插入 OLE 对象信息的数组。 |

## 示例

```javascript
window.Asc.plugin.attachEditorEvent("onInsertOleObjects", (arrData) => {
    console.log("event: onInsertOleObjects");
    for (let i = 0; i < arrData.length; i++) {
        let oleObject = arrData[i];
        console.log("ApplicationId: " + oleObject.ApplicationId);
        console.log("InternalId: " + oleObject.InternalId);
        console.log("Width: " + oleObject.Width);
        console.log("Height: " + oleObject.Height);
        console.log("WidthPix: " + oleObject.WidthPix);
        console.log("HeightPix: " + oleObject.HeightPix);
        console.log("ParaDrawingId: " + oleObject.ParaDrawingId);
        console.log("Data: " + oleObject.Data);
    }
});
```
