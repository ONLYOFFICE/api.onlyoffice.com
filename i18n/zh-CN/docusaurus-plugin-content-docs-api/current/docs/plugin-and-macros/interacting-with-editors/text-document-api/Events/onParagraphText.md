# onParagraphText

当文档中的段落文本更新时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| data | Object | 包含已更新段落信息的事件数据。 |

```javascript
window.Asc.plugin.attachEditorEvent("onParagraphText", (data) => {
    console.log("Paragraph updated:", data.paragraphId);
    data.annotations.forEach(a => {
        console.log(`Annotation ${a.id}: ${a.name} at ${a.start} (${a.length} chars)`);
    });
});
```

