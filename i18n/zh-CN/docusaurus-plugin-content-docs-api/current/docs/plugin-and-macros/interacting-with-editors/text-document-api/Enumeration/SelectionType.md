# 选择类型

当前的选择类型（"none"、"text"、"drawing" 或 "slide"）。

## 类型

Enumeration（枚举）

## 值

- "none"（无）
- "text"（文本）
- "drawing"（绘图）
- "slide"（幻灯片）


## 示例

```javascript
window.Asc.plugin.executeMethod ("GetSelectionType", [], function(type) {
    switch (type) {
        case "none":
        case "drawing":
            window.Asc.plugin.executeMethod ("PasteText", [$("#txt_shower")[0].innerText]);
            break;
        case "text":
            window.Asc.plugin.callCommand (function() {
                Api.ReplaceTextSmart (Asc.scope.arr);
            });
            break;
    }
});
```
