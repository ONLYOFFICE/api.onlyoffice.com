# 目标位置变更回调

当编辑器中的目标位置发生变化时调用的函数。

## 参数

此事件无参数。

```javascript
window.Asc.plugin.attachEditorEvent("onTargetPositionChanged", () => {
    if (!fClickLabel) {
        window.Asc.plugin.executeMethod("GetCurrentContentControl");
    }
    fClickLabel = false;
});
```

