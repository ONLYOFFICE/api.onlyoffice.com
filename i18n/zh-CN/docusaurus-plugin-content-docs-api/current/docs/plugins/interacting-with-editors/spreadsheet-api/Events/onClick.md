# onClick

用户点击元素时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| --------- | ------------- | ----------- |
| isSelectionUse | boolean | 定义是否使用选区。 |

```javascript
window.Asc.plugin.attachEditorEvent("onClick", (isSelectionUse) => {
    window.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function(obj) {
        window.Asc.plugin.currentContentControl = obj;
        var controlTag = obj ? obj.Tag : "";
        if (isSelectionUse)
            controlTag = "";

    });
});
```

