# GetClassType

返回 ApiFreeTextAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"freeTextAnnot"

## 示例

检查 PDF 文档中自由文本注释返回的类类型。

```javascript editor-pdf
// How do I check what type a free text annotation object is in a PDF document?

// Retrieve and output the class type string for a free text annotation in a PDF document.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
console.log(`Annot class type is: ${freeTextAnnot.GetClassType()}`);
```
