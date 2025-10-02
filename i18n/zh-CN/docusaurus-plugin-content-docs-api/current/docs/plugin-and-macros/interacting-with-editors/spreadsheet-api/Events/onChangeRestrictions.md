# 修改限制回调

当编辑器中的限制条件发生变化时调用的函数。

## 参数

| **名称** | **数据类型** | **描述** |
| -------- | ------------- | -------- |
| value | number | 限制值。 |

```javascript
window.Asc.plugin.attachEditorEvent("onChangeRestrictions", (value) => {
    if (value == 0) {
        console.log('You are able to edit the document');
    }
});
```

