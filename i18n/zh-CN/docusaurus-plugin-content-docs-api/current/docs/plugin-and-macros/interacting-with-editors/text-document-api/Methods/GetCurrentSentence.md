# GetCurrentSentence

返回当前句子。

## 语法

```javascript
expression.GetCurrentSentence(type);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 可选 | [TextPartType](../Enumeration/TextPartType.md) | "entirely" | 指定是返回整个句子还是仅返回其部分。 |

## 返回值

string

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetCurrentSentence", ["entirely"], function (res) {
    console.log (res)
});
```
