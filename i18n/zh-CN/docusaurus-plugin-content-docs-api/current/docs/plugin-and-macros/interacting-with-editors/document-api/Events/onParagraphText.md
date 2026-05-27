# onParagraphText

当文档中的段落文本更新时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| data | Object | 包含已更新段落信息的事件数据。 |

## 示例

```javascript
window.Asc.plugin.attachEditorEvent("onParagraphText", (data) => {
    console.log("event: onParagraphText");
    console.log("paragraphId: " + data.paragraphId);
    console.log("recalcId: " + data.recalcId);
    console.log("text: " + data.text);
    if (data.annotations) {
        for (let i = 0; i < data.annotations.length; i++) {
            let a = data.annotations[i];
            console.log("annotation id: " + a.id + ", name: " + a.name + ", start: " + a.start + ", length: " + a.length);
        }
    }
});
```
