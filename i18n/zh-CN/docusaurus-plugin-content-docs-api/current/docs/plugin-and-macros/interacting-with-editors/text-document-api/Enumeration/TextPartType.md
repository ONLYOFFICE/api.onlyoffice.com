# 文本部分类型

指定返回或替换的是整段文本还是其部分：\
- **entirely（全部）** - 替换/返回整段文本，\
- **beforeCursor（光标前）** - 仅替换/返回光标前的文本部分，\
- **afterCursor（光标后）** - 仅替换/返回光标后的文本部分。

## 类型

Enumeration（枚举）

## 取值

- "entirely"
- "beforeCursor"
- "afterCursor"


## 示例

```javascript
window.Asc.plugin.executeMethod ("GetCurrentWord", ["entirely"], function (res) {
    console.log (res)
});
```
