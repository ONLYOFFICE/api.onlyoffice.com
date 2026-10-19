# GetJoinType

返回笔触的联接类型。

## 语法

```javascript
expression.GetJoinType();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[LineJoinType](../../Enumeration/LineJoinType.md) \| null

## 示例

在演示文稿中读取形状边框的连接类型。

```javascript editor-pptx
// Get the join type to find out how the stroke corners are drawn.

// Apply a miter join to a rectangle's stroke, then read back its join type in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetJoinType("miter");
let joinType = retrievedStroke.GetJoinType();

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
slide.AddObject(label);
label.GetDocContent().GetElement(0).AddText("Join type: " + joinType);
```
