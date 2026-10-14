# SetDescription

设置当前绘图对象的描述。

继承自 [ApiDrawing.SetDescription](../../ApiDrawing/Methods/SetDescription.md)。

## 语法

```javascript
expression.SetDescription(description);
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| description | 必需 | string |  | 要为当前绘图对象设置的描述。 |

## 返回值

boolean

## 示例

在演示文稿中设置绘图对象的说明。

```javascript editor-pptx
// Useful for assigning the alternative text of a drawing.

// Create a drawing and set its description.

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
