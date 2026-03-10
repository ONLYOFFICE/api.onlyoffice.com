# Offset

返回从当前范围偏移的 Range 对象。

## 语法

```javascript
expression.Offset(rowOffset, columnOffset);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowOffset | 必需 | number |  | 偏移范围的行数。 |
| columnOffset | 必需 | number |  | 偏移范围的列数。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例演示如何从当前范围获取偏移范围。

```javascript editor-xlsx
// How to offset a range by rows and columns.

// Get a range, offset it and fill the offset range with color.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("C3:D4");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let offsetRange = originalRange.Offset(2, 1);
offsetRange.SetValue("Offset");
offsetRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

```
