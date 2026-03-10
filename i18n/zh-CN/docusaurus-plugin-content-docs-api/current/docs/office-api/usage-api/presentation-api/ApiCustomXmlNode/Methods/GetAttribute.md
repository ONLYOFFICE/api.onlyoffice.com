# GetAttribute

从自定义 XML 节点检索属性值。
如果属性不存在，则返回 `false`。

## 语法

```javascript
expression.GetAttribute(name);
```

`expression` - 表示 [ApiCustomXmlNode](../ApiCustomXmlNode.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要检索的属性名称。 |

## 返回值

string \| null

## 示例

此示例演示如何从自定义 XML 节点获取属性值。

```javascript editor-pptx
// How to get an attribute from an XML node.

// Get an XML node attribute.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xml = xmlManager.Add("<product id='123' name='Laptop' price='999'></product>");
let productNode = xml.GetNodes('/product')[0];
let id = productNode.GetAttribute("id");
let name = productNode.GetAttribute("name");
let price = productNode.GetAttribute("price");
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
let displayText = "Product ID: " + id + "\nProduct Name: " + name + "\nProduct Price: " + price;
run.AddText(displayText);
paragraph.AddElement(run);
slide.AddObject(shape);
```
