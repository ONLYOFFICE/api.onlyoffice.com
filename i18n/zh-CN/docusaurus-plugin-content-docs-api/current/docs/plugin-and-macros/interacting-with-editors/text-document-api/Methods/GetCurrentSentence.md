# 获取当前句子

返回当前句子。

## 语法

```javascript
expression.GetCurrentSentence(type);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 选填 | [文本部分类型](../Enumeration/TextPartType.md) | "entirely" | 指定返回整句还是句子的一部分。 |

## 返回值

string（字符串）

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetCurrentSentence", ["entirely"], function (res) {
    console.log (res)
});
```
