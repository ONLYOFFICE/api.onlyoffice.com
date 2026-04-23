# Delete

删除当前 XML 节点。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何删除自定义 XML 节点。

```javascript editor-pptx
// How to delete a custom XML node.

// Delete an XML node.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xml = xmlManager.Add("<root><item>Value 1</item><item>Value 2</item></root>");
let rootNode = xml.GetNodes("/root")[0];
let itemNodes = rootNode.GetNodes("/item");
itemNodes[0].Delete();
let remainingNodes = rootNode.GetNodes("/item");
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
run.AddText("Remaining items: " + remainingNodes.length);
paragraph.AddElement(run);
slide.AddObject(shape);
```
