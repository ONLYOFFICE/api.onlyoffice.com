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

```javascript editor-xlsx
// How to update paddings of the drawing.

// Create a shape and set its paddings.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 50 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
content.RemoveAllElements();
shape.SetVerticalTextAlign("bottom");
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is a sample text with paddings set to it. ");
paragraph.AddText("Left: 2cm, Top: 0.5cm, Right: 0.5cm, Bottom: 0.3cm");
shape.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
content.Push(paragraph);
```
