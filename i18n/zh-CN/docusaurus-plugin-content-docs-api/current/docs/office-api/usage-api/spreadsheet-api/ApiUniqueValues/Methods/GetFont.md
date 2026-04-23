# GetFont

返回当前格式条件应用的字体。

## 语法

```javascript
expression.GetFont();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFont](../../ApiFont/ApiFont.md) \| null

## 示例

此示例获取条件格式规则应用的字体。

```javascript editor-xlsx
// How to retrieve font settings from conditional formatting rules.

// Get conditional formatting rule font.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let font = condition1.GetFont();
if (font) {
    font.SetBold(true);
    font.SetSize(14);
}

worksheet.GetRange("C1").SetValue("Font applied:");
worksheet.GetRange("C2").SetValue("Bold: " + (font ? font.Bold : "false"));
worksheet.GetRange("C3").SetValue("Size: " + (font ? font.Size : "default"));

```
