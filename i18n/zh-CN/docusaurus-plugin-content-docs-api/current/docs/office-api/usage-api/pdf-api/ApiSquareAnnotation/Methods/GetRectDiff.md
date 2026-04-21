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

获取 PDF 文档中方形注释的矩形差异。

```javascript editor-pdf
// How to get the rect diff for a square annotation in a PDF document?

// Get the rect diff and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
console.log(`Annot rect diff is: ${squareAnnot.GetRectDiff()}`);
```
