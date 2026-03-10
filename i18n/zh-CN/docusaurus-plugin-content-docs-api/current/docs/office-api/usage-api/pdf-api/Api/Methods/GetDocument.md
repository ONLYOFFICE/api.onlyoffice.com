# GetDocument

使用指定的文本字段属性创建文本字段。

## 语法

```javascript
expression.GetDocument();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocument](../../ApiDocument/ApiDocument.md)

## 示例

This example gets the document object for further use.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.AddPage(1);
page.SetRotation(90);
```
