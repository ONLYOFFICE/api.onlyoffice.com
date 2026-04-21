# GetClassType

返回 ApiRichParaPr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRichParaPr](../ApiRichParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"richParaPr"

## 示例

获取 PDF 文档中富文本段落属性的类类型。

```javascript editor-pdf
// How to identify the class type of a rich paragraph properties in a PDF document?

// Obtain the class type identifier of a rich paragraph properties object in a PDF document.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
para.AddText("Example text");
let paraPr = para.GetParaPr();

console.log(`Object class type is: ${paraPr.GetClassType()}`);
```
