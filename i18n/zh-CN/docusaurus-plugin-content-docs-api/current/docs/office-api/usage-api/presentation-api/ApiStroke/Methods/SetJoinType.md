# SetJoinType

设置笔触的联接类型。

## 语法

```javascript
expression.SetJoinType(type);
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [LineJoinType](../../Enumeration/LineJoinType.md) |  | 笔触的联接类型。 |

## 返回值

boolean

## 示例

在演示文稿中为形状边框的拐角设置斜角连接。

```javascript editor-pptx
// Change the join type to control how the stroke corners are drawn.

// Create a rectangle, retrieve its stroke, apply the bevel join type, and display the result in a presentation.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetJoinType("bevel");

let label = Api.CreateShape("rect", 120 * 36000, 30 * 36000, fill, Api.CreateStroke(0, Api.CreateNoFill()));
label.SetPosition(2000000, 3000000);
slide.AddObject(label);
label.GetDocContent().GetElement(0).AddText("Join type set: " + result);
```
