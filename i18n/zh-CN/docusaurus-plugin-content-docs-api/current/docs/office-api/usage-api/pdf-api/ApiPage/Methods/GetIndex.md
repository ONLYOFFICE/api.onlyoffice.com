# GetIndex

获取页面索引

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

检索 PDF 中页面的顺序位置。

```javascript editor-pdf
// How do I find which page number I'm on in a PDF?

// Access the page position to identify its location in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page index is: ' + page.GetIndex());
```
