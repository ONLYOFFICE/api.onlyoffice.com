# GetClassType

返回 ApiRichTextPr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRichTextPr](../ApiRichTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"richTextPr"

## 示例

获取 PDF 文档中富文本属性对象的类类型。

```javascript editor-pdf
// How can I get the class type of a rich text properties in a PDF document?

// Get the class type of a rich text properties and display it in the PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let run = para.GetElement(0);
run.AddText("Some example text");

let textPr = run.GetTextPr();

console.log(`Object class type is: ${textPr.GetClassType()}`);
```
