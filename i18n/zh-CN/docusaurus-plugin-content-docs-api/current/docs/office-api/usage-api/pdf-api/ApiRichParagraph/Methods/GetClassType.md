# GetClassType

返回 ApiRichParagraph 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRichParagraph](../ApiRichParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"richParagraph"

## 示例

识别 PDF 中段落对象的类型。

```javascript editor-pdf
// How do I determine what type a paragraph is in a PDF?

// Check the object classification of a paragraph in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);

console.log(`Object class type is: ${para.GetClassType()}`);
```
