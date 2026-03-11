# onBlurAnnotation

当批注失去焦点时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| annotation | TextAnnotation | 失去焦点的批注。 |

```javascript
window.Asc.plugin.attachEditorEvent("onBlurAnnotation", (data) => {
    console.log("Annotation blur:", data.rangeId);
});
```

