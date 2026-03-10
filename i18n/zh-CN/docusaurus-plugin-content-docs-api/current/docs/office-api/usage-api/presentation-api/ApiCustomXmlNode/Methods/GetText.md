# GetText

返回当前节点及其子节点的内部文本。
例如：`&lt;text&gt;123&lt;one&gt;4&lt;/one&gt;&lt;/text&gt;` 返回 `"1234"`。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何获取自定义 XML 节点的文本内容。

```javascript editor-pptx
// How to get text content from an XML node.

// Get XML node text.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xml = xmlManager.Add("<message>Hello from custom XML!</message>");
let messageNode = xml.GetNodes('/message')[0];
let text = messageNode.GetText();
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
run.AddText("Message: " + text);
paragraph.AddElement(run);
slide.AddObject(shape);
```
