# SetFill

设置当前路径的填充类型。

## 语法

```javascript
expression.SetFill(sFill);
```

`expression` - 表示 [ApiPath](../ApiPath.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFill | 必需 | [PathFillType](../../Enumeration/PathFillType.md) |  | 路径填充类型。 |

## 返回值

此方法不返回任何数据。

## 示例

控制电子表格中自定义形状路径的内部是否填充颜色。

```javascript editor-xlsx
// How do I turn on the fill for a custom shape path in a spreadsheet?

// Define the fill rule for a drawn path so its enclosed area receives a color in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.SetStroke(true);
path.SetFill("norm");
path.MoveTo(50 * 36000, 0);
path.LineTo(70 * 36000, 45 * 36000);
path.LineTo(55 * 36000, 70 * 36000);
path.LineTo(100 * 36000, 100 * 36000);
path.LineTo(0, 100 * 36000);
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("rect", 60 * 36000, 60 * 36000, fill, stroke, 3, 0, 2, 2);
shape.SetGeometry(customGeometry);
```
