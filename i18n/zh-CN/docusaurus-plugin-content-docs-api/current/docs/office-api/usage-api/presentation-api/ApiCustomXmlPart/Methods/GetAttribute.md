# GetAttribute

返回指定 XPath 的 XML 节点的属性。

## 语法

```javascript
expression.GetAttribute(xPath, name);
```

`expression` - 表示 [ApiCustomXmlPart](../ApiCustomXmlPart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| xPath | 必需 | string |  | 要从中获取属性的节点的 XPath。 |
| name | 必需 | string |  | 要查找的属性名称。 |

## 返回值

string \| null

## 示例

此示例演示如何从自定义 XML 部件的根元素获取属性。

```javascript editor-pptx
// How to get an attribute from an XML part element.

// Get an XML attribute.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xml = xmlManager.Add("<config version='1.0' xmlns='http://example'><setting>value</setting></config>");
let rootNodes = xml.GetNodes('/config');
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
if (rootNodes.length > 0) {
    let version = rootNodes[0].GetAttribute('version');
    run.AddText("Config version: " + version);
} else {
    run.AddText("No root node found");
}
paragraph.AddElement(run);
slide.AddObject(shape);
```
