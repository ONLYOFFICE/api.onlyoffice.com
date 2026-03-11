# GetDashType

获取笔触的虚线类型。

## 语法

```javascript
expression.GetDashType();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[LineDashType](../../Enumeration/LineDashType.md) \| null

## 示例

获取描边的虚线类型。

```javascript editor-docx
// Creates a shape with a solid border and displays its dash type.
// Returns string value: "dash", "dashDot", "dot", "lgDash", "lgDashDot",
// "lgDashDotDot", "solid", "sysDash", "sysDashDot", "sysDashDotDot", "sysDot"
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();
let retrievedStroke = shape.GetLine();
let dashType = retrievedStroke.GetDashType();
paragraph.AddText("Dash type: " + (dashType ? dashType : "not set"));

```
