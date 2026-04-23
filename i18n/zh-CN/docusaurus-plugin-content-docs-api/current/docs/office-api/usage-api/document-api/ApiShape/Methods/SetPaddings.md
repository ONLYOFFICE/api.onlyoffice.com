# SetPaddings

设置当前形状的文本内边距。

## 语法

```javascript
expression.SetPaddings(nLeft, nTop, nRight, nBottom);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | 必需 | [EMU](../../Enumeration/EMU.md) |  | 左内边距。 |
| nTop | 必需 | [EMU](../../Enumeration/EMU.md) |  | 上内边距。 |
| nRight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 右内边距。 |
| nBottom | 必需 | [EMU](../../Enumeration/EMU.md) |  | 下内边距。 |

## 返回值

boolean

## 示例

此示例设置当前形状的文本内边距。

```javascript editor-docx
// How to update paddings of the drawing.

// Create a shape and set its paddings.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let docContent = drawing.GetDocContent();
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text with paddings set to it.");
docContent.Push(paragraph);
drawing.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
```
