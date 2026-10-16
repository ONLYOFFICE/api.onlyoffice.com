# GetDescription

获取当前绘图对象的描述。

继承自 [ApiDrawing.GetDescription](../../ApiDrawing/Methods/GetDescription.md)。

## 语法

```javascript
expression.GetDescription();
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

在演示文稿中获取绘图对象的说明。

```javascript editor-pptx
// Needed when reading the alternative text of a drawing.

// Create a drawing, set its description, and read it back.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
drawing.SetDescription("My Drawing Description");
let description = drawing.GetDescription();
let docContent = drawing.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing description: " + description);
```
