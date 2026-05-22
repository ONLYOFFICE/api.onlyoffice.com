# GetCallout

获取批注标注。

## 语法

```javascript
expression.GetCallout();
```

`expression` - 表示 [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FreeTextCallout](../../Enumeration/FreeTextCallout.md)

## 示例

提取 PDF 中文本注释使用的标注形状。

```javascript editor-pdf
// How do I find the shape of a comment box in a PDF?

// Retrieve the callout style from a text annotation in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
console.log(`Annot callout is: ${freeTextAnnot.GetCallout()}`);
```
