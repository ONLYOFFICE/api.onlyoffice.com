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

获取笔触的虚线类型。在 PDF 文档中创建具有实线边框的形状并显示其虚线类型。返回字符串值："dash"、"dashDot"、"dot"、"lgDash"、"lgDashDot"、"lgDashDotDot"、"solid"、"sysDash"、"sysDashDot"、"sysDashDotDot"、"sysDot"。

```javascript editor-pdf
// How to get the dash type for a stroke in a PDF document?

// Get the dash type and display the result in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(0, 0, 255)));
let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let retrievedStroke = shape.GetLine();
let dashType = retrievedStroke.GetDashType();
paragraph.AddText("Dash type: " + (dashType ? dashType : "not set"));
```
