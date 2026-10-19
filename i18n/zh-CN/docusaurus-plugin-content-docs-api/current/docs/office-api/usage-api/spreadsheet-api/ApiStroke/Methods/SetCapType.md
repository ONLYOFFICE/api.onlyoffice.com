# SetCapType

设置笔触的线端类型。

## 语法

```javascript
expression.SetCapType(type);
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [LineCapType](../../Enumeration/LineCapType.md) |  | 笔触的线端类型。 |

## 返回值

boolean

## 示例

在电子表格中为形状边框的端点设置方形线端。

```javascript editor-xlsx
// Change the cap type to control how the stroke ends are drawn.

// Create a line, retrieve its stroke, apply the square cap type, and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(8 * 12700, Api.CreateSolidFill(Api.RGB(0, 0, 255)));
let line = worksheet.AddShape("line", 60 * 36000, 40 * 36000, fill, stroke, 3, 0, 2, 2);
let retrievedStroke = line.GetLine();
let result = retrievedStroke.SetCapType("square");
worksheet.GetRange("A1").SetValue("Cap type set: " + result);
```
