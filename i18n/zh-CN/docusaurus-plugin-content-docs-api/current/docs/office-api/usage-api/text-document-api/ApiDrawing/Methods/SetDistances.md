# SetDistances

指定将在当前绘图对象的边缘和任何
后续文本之间保持的最小距离。

## 语法

```javascript
expression.SetDistances(nLeft, nTop, nRight, nBottom);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | 必需 | [EMU](../../Enumeration/EMU.md) |  | 当前对象左侧与后续文本运行之间的距离，以英制单位测量。 |
| nTop | 必需 | [EMU](../../Enumeration/EMU.md) |  | 当前对象顶侧与前面文本运行之间的距离，以英制单位测量。 |
| nRight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 当前对象右侧与后续文本运行之间的距离，以英制单位测量。 |
| nBottom | 必需 | [EMU](../../Enumeration/EMU.md) |  | 当前对象底侧与后续文本运行之间的距离，以英制单位测量。 |

## 返回值

boolean

## 示例

此示例指定将在绘图对象的边缘和任何后续文本之间保持的最小距离。

```javascript editor-docx
// How to create drawings and set the distance between them.

// Create a rectangle, square and set the minimum distance between them.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with a shape. ");
paragraph.AddText("The text wraps the rectangular box that bounds the object. ");
paragraph.AddText("The distance between the shape and the text is 1 inch (914400 English measure units).");
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(914400, 0, 914400, 0);
drawing.SetWrappingStyle("square");
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is another paragraph.");
doc.Push(paragraph);
```
