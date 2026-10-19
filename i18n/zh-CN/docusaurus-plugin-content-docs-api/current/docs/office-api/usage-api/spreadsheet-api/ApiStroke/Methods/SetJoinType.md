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

在电子表格中为形状边框的拐角设置斜角连接。

```javascript editor-xlsx
// Change the join type to control how the stroke corners are drawn.

// Create a rectangle, retrieve its stroke, apply the bevel join type, and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = shape.GetLine();
let result = retrievedStroke.SetJoinType("bevel");
worksheet.GetRange("A1").SetValue("Join type set: " + result);
```
