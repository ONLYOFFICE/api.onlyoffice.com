# Add

向 XML 管理器添加新的自定义 XML 部件。

## 语法

```javascript
expression.Add(xml);
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xml | 必需 | string |  | 要添加的 XML 字符串。 |

## 返回值

[ApiCustomXmlPart](../../ApiCustomXmlPart/ApiCustomXmlPart.md)

## 示例

在演示文稿中添加新的自定义 XML 部件并访问它。

```javascript editor-pptx
// How do I create a new custom XML part in a presentation?

// Display the XML content of the added part in a presentation.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let newXml = xmlManager.Add("<content xmlns='http://example' version='1.0'></content>");
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
run.AddText("New XML part added: " + newXml.GetXml());
paragraph.AddElement(run);
slide.AddObject(shape);
```
