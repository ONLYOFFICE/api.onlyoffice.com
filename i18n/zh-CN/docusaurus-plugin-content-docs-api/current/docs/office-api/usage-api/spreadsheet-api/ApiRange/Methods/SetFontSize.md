# SetFontSize

设置当前单元格范围中字符的字体大小。

## 语法

```javascript
expression.SetFontSize(nSize);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSize | 必需 | number |  | 以磅为单位的字体大小值。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置单元格范围中字符的字体大小。

```javascript editor-xlsx
// How to resize a cell font size.

// Get a range and set its font size.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("2");
let range = worksheet.GetRange("A1:D5");
range.SetFontSize(20);
```
