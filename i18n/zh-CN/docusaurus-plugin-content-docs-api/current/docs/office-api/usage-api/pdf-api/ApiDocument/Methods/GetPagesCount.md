# GetPagesCount

获取文档页数

## 语法

```javascript
expression.GetPagesCount();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算 PDF 中的总页数。

```javascript editor-pdf
// How do I find out how many pages my PDF has?

// Show the page count in a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(doc.GetPagesCount());
```
