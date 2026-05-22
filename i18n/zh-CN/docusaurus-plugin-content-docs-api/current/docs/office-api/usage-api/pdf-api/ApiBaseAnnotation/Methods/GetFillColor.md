# GetFillColor

获取批注填充颜色。

## 语法

```javascript
expression.GetFillColor();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

检索 PDF 中注释的填充颜色。

```javascript editor-pdf
// What color is used to fill an annotation in a PDF?

// Check the background or fill color applied to an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation fill color is: ${squareAnnot.GetFillColor()}`);
```
