# GetCustomXmlParts

检索与演示文稿关联的自定义 XML 管理器。
此管理器允许操作和访问演示文稿中的自定义 XML 部分。

## 语法

```javascript
expression.GetCustomXmlParts();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomXmlParts](../../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null

## 示例

访问和管理演示文稿中的自定义 XML 部件。

```javascript editor-pptx
// Add custom XML content and retrieve it by ID.

// Display the retrieved XML text in a shape.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xmlText = "<content><text>Example XML</text></content>";
let xmlPart = xmlManager.Add(xmlText);
let xmlId = xmlPart.GetId();
let retrievedXml = xmlManager.GetById(xmlId);
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
run.AddText("Retrieved XML: " + retrievedXml.GetXml());
paragraph.AddElement(run);
slide.AddObject(shape);
```
