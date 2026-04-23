# GetCount

返回 XML 管理器中自定义 XML 部件的数量。

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何获取 XML 管理器中自定义 XML 部件的数量。

```javascript editor-pptx
// How to get the count of custom XML parts.

// Get the count of XML parts.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
xmlManager.Add("<products><item><name>Laptop</name><price>999</price></item></products>");
xmlManager.Add("<user><name>John Doe</name><email>john@example.com</email></user>");
let count = xmlManager.GetCount();
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
run.AddText("There are " + count + " custom XML parts in the presentation.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
