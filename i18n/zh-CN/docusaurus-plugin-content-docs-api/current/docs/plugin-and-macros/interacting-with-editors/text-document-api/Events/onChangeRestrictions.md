# 权限变更回调

当编辑器中的权限设置发生更改时调用的回调函数。

## 参数

| **名称** | **数据类型** | **说明** |
| --------- | ------------- | ----------- |
| value | number | 权限值。 |

```javascript
window.Asc.plugin.attachEditorEvent("onChangeRestrictions", (value) => {
    if (value == 0) {
        console.log('You are able to edit the document');
    }
});
```

