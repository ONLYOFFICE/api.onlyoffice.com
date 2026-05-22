# GetBorderEffectStyle

获取批注边框效果样式。

## 语法

```javascript
expression.GetBorderEffectStyle();
```

`expression` - 表示 [ApiBaseAnnotation](../ApiBaseAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[AnnotBorderEffectStyle](../../Enumeration/AnnotBorderEffectStyle.md)

## 示例

检索 PDF 中应用于注释的边框效果样式。

```javascript editor-pdf
// What type of border effect is applied to an annotation in a PDF?

// Find out whether an annotation has a cloud, solid, or other border effect style in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect style is: ${squareAnnot.GetBorderEffectStyle()}`);
```
