# GetClassType

返回 ApiCustomXmlParts 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCustomXmlParts](../ApiCustomXmlParts.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"customXmlParts"

## 示例

获取演示文稿中自定义 XML 部件对象的类类型。

```javascript editor-pptx
// How do I determine the class type of a custom XML parts manager in a presentation?

// Display the class type of the XML parts manager in a presentation.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let classType = xmlManager.GetClassType();
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
run.AddText("XML manager class type: " + classType);
paragraph.AddElement(run);
slide.AddObject(shape);
```
