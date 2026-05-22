# GetRectDiff

获取批注矩形差值。

## 语法

```javascript
expression.GetRectDiff();
```

`expression` - 表示 [ApiSquareAnnotation](../ApiSquareAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Rect](../../Enumeration/Rect.md)

## 示例

读取 PDF 中方形注释周围的间距。

```javascript editor-pdf
// How do I find the padding or margin of a square annotation in a PDF?

// Check the distance from the annotation's edges to its borders in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
console.log(`Annot rect diff is: ${squareAnnot.GetRectDiff()}`);
```
