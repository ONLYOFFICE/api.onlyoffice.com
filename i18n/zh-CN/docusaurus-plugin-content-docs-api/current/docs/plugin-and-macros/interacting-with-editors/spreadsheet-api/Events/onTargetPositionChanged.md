# onTargetPositionChanged

当编辑器中的目标位置发生更改时调用的函数。

## 参数

此事件没有参数。

```javascript
window.Asc.plugin.attachEditorEvent("onTargetPositionChanged", () => {
    if (!fClickLabel) {
        window.Asc.plugin.executeMethod("GetCurrentContentControl");
    }
    fClickLabel = false;
});
```

