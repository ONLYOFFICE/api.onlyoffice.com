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

[DashType](../../Enumeration/DashType.md) \| null

## 示例

获取笔触的虚线类型。在文档中创建带有实线边框的形状并显示其虚线类型。返回字符串值："dash"、"dashDot"、"dot"、"lgDash"、"lgDashDot"、"lgDashDotDot"、"solid"、"sysDash"、"sysDashDot"、"sysDashDotDot"、"sysDot"。

```javascript editor-docx
// How can I get the dash type using a stroke in a document?

// Get the dash type for a stroke in a document.

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
