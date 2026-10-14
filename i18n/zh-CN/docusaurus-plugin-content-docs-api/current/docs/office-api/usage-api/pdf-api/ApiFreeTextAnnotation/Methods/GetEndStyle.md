# GetEndStyle

获取线条终点样式。

## 语法

```javascript
expression.GetEndStyle();
```

`expression` - 表示 [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[LineEndStyle](../../Enumeration/LineEndStyle.md)

## 示例

检索 PDF 中标注线的结束样式。

```javascript editor-pdf
// Inspect the endpoint marker of a free text callout annotation.

// Read and display the configured line ending style.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
freeTextAnnot.SetEndStyle("square");
console.log(`End style is: ${freeTextAnnot.GetEndStyle()}`);
```
