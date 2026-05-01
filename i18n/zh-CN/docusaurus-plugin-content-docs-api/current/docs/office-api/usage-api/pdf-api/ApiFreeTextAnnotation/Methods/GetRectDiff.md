# GetRectDiff

获取批注矩形差值。

## 语法

```javascript
expression.GetRectDiff();
```

`expression` - 表示 [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Rect](../../Enumeration/Rect.md)

## 示例

获取 PDF 文档中自由文本注释的矩形差异。

```javascript editor-pdf
// How do I get the rect diff in a PDF document?

// Get the rect diff using a free text annotation object in a PDF document.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
console.log(`Annot rect diff is: ${freeTextAnnot.GetRectDiff()}`);
```
