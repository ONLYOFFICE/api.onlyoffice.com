# GetPreset

如果当前几何形状基于预设，则返回预设形状的名称。

## 语法

```javascript
expression.GetPreset();
```

`expression` - 表示 [ApiGeometry](../ApiGeometry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ShapeType](../../Enumeration/ShapeType.md) \| null

## 示例

读取分配给电子表格中形状的内置形状模板名称。

```javascript editor-xlsx
// How do I find out which standard shape template a shape is based on in a spreadsheet?

// Identify the predefined outline category that describes a shape's form in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = worksheet.AddShape("star5", 60 * 36000, 60 * 36000, fill, stroke, 0, 0, 2, 2);
let geometry = shape.GetGeometry();
worksheet.GetRange("A1").SetValue("Preset: " + geometry.GetPreset());
worksheet.GetRange("A2").SetValue("IsCustom: " + geometry.IsCustom());
```
