# GetParent

返回当前格式条件的父区域对象。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

此示例展示如何获取条件格式规则的父范围。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Sales Data');
worksheet.GetRange('A2').SetValue(100);
worksheet.GetRange('A3').SetValue(250);
worksheet.GetRange('A4').SetValue(150);

const dataRange = worksheet.GetRange('A2:A4');
const formatConditions = dataRange.GetFormatConditions();
const condition = formatConditions.Add('xlCellValue', 'xlGreater', '200');
condition.SetFillColor(Api.CreateColorFromRGB(200, 100, 100));

const parentRange = condition.GetParent();
worksheet.GetRange('C1').SetValue('Parent range:');
worksheet.GetRange('C2').SetValue(parentRange.GetAddress());

```
