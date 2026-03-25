# TextPartType

指定是返回或替换整个文本还是仅其部分：
-**entirely** - 替换/返回整个文本，
-**beforeCursor** - 仅替换/返回光标之前的文本部分，
-**afterCursor** - 仅替换/返回光标之后的文本部分。

## 类型

枚举

## 值

- "entirely"
- "beforeCursor"
- "afterCursor"


## 示例

```javascript
window.Asc.plugin.executeMethod ("GetCurrentWord", ["entirely"], function (res) {
    console.log (res)
});
```
