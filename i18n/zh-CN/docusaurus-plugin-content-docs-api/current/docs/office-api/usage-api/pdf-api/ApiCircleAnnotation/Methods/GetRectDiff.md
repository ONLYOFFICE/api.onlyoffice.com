# GetRectDiff

获取批注矩形差值。

## 语法

```javascript
expression.GetRectDiff();
```

`expression` - 表示 [ApiCircleAnnotation](../ApiCircleAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Rect](../../Enumeration/Rect.md)

## 示例

读取 PDF 中圆形注释的边框宽度差异。

```javascript editor-pdf
// How do I check the border thickness offset of a circle annotation in a PDF?

// Retrieve the rect difference values for a circle annotation in a PDF.

let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
console.log(`Annot rect diff is: ${circleAnnot.GetRectDiff()}`);
```
