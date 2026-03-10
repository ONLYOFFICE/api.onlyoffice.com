# SetValue

设置当前单元格或单元格范围的值。

## 语法

```javascript
expression.SetValue(data);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | 必需 | string \| boolean \| number \| (string \| boolean \| number)[] \| (string \| boolean \| number)[][] |  | 单元格或单元格范围的通用值。 |

## 返回值

boolean

## 示例

此示例设置单元格的值。

```javascript editor-xlsx
// How to add underline to the cell value.

// Get a range and add underline its text.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("B2").SetValue("2");
worksheet.GetRange("A3").SetValue("2x2=");
worksheet.GetRange("B3").SetValue("=B1*B2");
```
