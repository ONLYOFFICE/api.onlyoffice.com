# GetOpacity

获取批注不透明度。

## 语法

```javascript
expression.GetOpacity();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索 PDF 中注释的透明度级别。

```javascript editor-pdf
// How transparent is an annotation in a PDF?

// Check the opacity value that controls how see-through an annotation appears in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation opacity is: ${squareAnnot.GetOpacity()}`);
```
