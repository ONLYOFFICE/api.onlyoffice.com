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

获取 PDF 文档中圆形注释的矩形差异。

```javascript editor-pdf
// How do I get the rect diff in a PDF document?

// Get the rect diff using a circle annotation object in a PDF document.

let doc = Api.GetDocument();
let circleAnnot = Api.CreateCircleAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(circleAnnot);
circleAnnot.SetBorderEffectStyle("cloud");
circleAnnot.SetBorderEffectIntensity(1);
console.log(`Annot rect diff is: ${circleAnnot.GetRectDiff()}`);
```
