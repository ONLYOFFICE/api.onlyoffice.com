# 获取当前单词

返回当前单词。

## 语法

```javascript
expression.GetCurrentWord(type);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 选填 | [文本部分类型](../Enumeration/TextPartType.md) | "entirely" | 指定返回整个单词还是单词的一部分。 |

## 返回值

string（字符串）

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetCurrentWord", ["entirely"], function (res) {
    console.log (res)
});
```
