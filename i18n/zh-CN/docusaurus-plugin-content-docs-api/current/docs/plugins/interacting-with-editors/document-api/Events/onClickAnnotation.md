# onClickAnnotation

用户点击批注时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| annotation | TextAnnotation | 被点击的批注。 |

## 示例

```javascript
window.Asc.plugin.attachEditorEvent("onClickAnnotation", (data) => {
    console.log("event: onClickAnnotation");
    console.log("paragraphId: " + data.paragraphId);
    for (let i = 0; i < data.ranges.length; i++) {
        console.log("rangeId: " + data.ranges[i]);
    }
});
```
