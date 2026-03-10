# SetFontName

将指定的字体系列设置为当前单元格范围的字体名称。

## 语法

```javascript
expression.SetFontName(sName);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 用于当前单元格范围的字体系列名称。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例将指定的字体系列设置为单元格范围的字体名称。

```javascript editor-xlsx
// How to change a cell font family.

// Get a range and set its font family using its name.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetFontName("Arial");
```
