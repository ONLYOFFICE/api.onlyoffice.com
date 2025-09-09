# 替换当前单词

用指定的字符串替换当前单词。

## 语法

```javascript
expression.ReplaceCurrentWord(replaceString, type);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| replaceString | 必填 | string | — | 替换字符串。 |
| type | 选填 | [文本部分类型](../Enumeration/TextPartType.md) | "entirely" | 指定替换整个单词还是单词的一部分。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("ReplaceCurrentWord", ["ONLYOFFICE", "entirely"]);
```
