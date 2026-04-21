# ReplaceCurrentWord

用指定的字符串替换当前单词。

## 语法

```javascript
expression.ReplaceCurrentWord(replaceString, type);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| replaceString | 必需 | string |  | 替换字符串。 |
| type | 可选 | [TextPartType](../Enumeration/TextPartType.md) | "entirely" | 指定是替换整个单词还是仅替换其部分。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("ReplaceCurrentWord", ["ONLYOFFICE", "entirely"]);
```
