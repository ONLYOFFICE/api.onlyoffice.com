# GetSelectedText

获取页面上的选定文本

## 语法

```javascript
expression.GetSelectedText();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

提取 PDF 页面上已高亮显示的文本。

```javascript editor-pdf
// How do I capture the text I've selected in a PDF?

// Retrieve what text is currently marked on a page in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log(`The selected text is: ${page.GetSelectedText()}`);
```
