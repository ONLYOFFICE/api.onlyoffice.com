# GetRect

设置批注矩形。

## 语法

```javascript
expression.GetRect();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Rect](../../Enumeration/Rect.md)

## 示例

在 PDF 文档中创建方形注释并获取其矩形。

```javascript editor-pdf
// How to get the rect for an annotation in a PDF document?

// Get the rect and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation rect is: ${squareAnnot.GetRect()}`);
```
