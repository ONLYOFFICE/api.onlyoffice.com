# Delete

从自定义 XML 管理器中删除 XML。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

删除演示文稿中的自定义 XML 部件。

```javascript editor-pptx
// Remove a custom XML part and show remaining parts in a presentation.

// Discard an XML part from the document in a presentation.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xml1 = xmlManager.Add("<user xmlns='http://example'>John</user>");
let xml2 = xmlManager.Add("<customer xmlns='http://example'>Alex</customer>");
xml1.Delete();
let count = xmlManager.GetCount();
let xmlParts = xmlManager.GetAll();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(60);
let displayText = "Remaining XML parts: " + count;
xmlParts.forEach(function(part, index) {
    displayText += "\nXML part: " + part.GetXml();
});
run.AddText(displayText);
paragraph.AddElement(run);
slide.AddObject(shape);
```
