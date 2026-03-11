# onFocusAnnotation

当批注获得焦点时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| annotation | TextAnnotation | 获得焦点的批注。 |

```javascript
window.Asc.plugin.attachEditorEvent("onFocusAnnotation", (data) => {
    console.log("Annotation focused:", data.rangeId);
});
```

