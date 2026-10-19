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

在电子表格中读取形状边框的连接类型。

```javascript editor-xlsx
// Get the join type to find out how the stroke corners are drawn.

// Apply a miter join to a rectangle's stroke, then read back its join type in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
retrievedStroke.SetJoinType("miter");
let joinType = retrievedStroke.GetJoinType();
worksheet.GetRange("A1").SetValue("Join type: " + joinType);
```
