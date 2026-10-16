# GetWidth

获取页面宽度

## 语法

```javascript
expression.GetWidth();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[pt](../../Enumeration/pt.md)

## 示例

获取 PDF 中页面的宽度。

```javascript editor-pdf
// How do I find out the horizontal size of a page in a PDF?

// Read the page width in points to display it in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page width is: ' + page.GetWidth());
```
