# 替换当前句子

用指定的字符串替换当前句子。

## 语法

```javascript
expression.ReplaceCurrentSentence(replaceString, type);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| replaceString | 必填 | string | — | 替换字符串。 |
| type | 选填 | [文本部分类型](../Enumeration/TextPartType.md) | "entirely" | 指定替换整句还是句子的一部分。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("ReplaceCurrentSentence", ["ONLYOFFICE", "entirely"]);
```
