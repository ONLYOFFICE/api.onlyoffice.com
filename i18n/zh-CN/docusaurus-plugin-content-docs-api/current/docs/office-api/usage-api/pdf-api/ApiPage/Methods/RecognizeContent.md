# RecognizeContent

识别页面上的内容并返回已识别对象的数组。

## 语法

```javascript
expression.RecognizeContent();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Drawing](../../Enumeration/Drawing.md)[]

## 示例

检测并识别 PDF 页面上的形状和元素。

```javascript editor-pdf
// How do I find what objects are drawn on a page in a PDF?

// Extract recognized elements from a page to work with them in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let drawings = page.RecognizeContent();
drawings[0].Select();
```
