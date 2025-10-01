# 粘贴文本

将文本粘贴到文档中。

## 语法

```javascript
expression.PasteText(text);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必填 | string |  | 指定要粘贴到文档中的文本字符串。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("PasteText", ["ONLYOFFICE for developers"]);
```
