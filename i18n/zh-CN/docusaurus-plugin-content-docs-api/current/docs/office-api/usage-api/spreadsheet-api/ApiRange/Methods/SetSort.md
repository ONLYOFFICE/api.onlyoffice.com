# SetSort

根据请求中指定的参数对给定范围内的单元格进行排序。

## 语法

```javascript
expression.SetSort(key1, sSortOrder1, key2, sSortOrder2, key3, sSortOrder3, sHeader, sOrientation);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| key1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| String |  | 第一排序字段。 |
| sSortOrder1 | 必需 | [SortOrder](../../Enumeration/SortOrder.md) |  | Key1 中指定值的排序顺序。 |
| key2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| String |  | 第二排序字段。 |
| sSortOrder2 | 必需 | [SortOrder](../../Enumeration/SortOrder.md) |  | Key2 中指定值的排序顺序。 |
| key3 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| String |  | 第三排序字段。 |
| sSortOrder3 | 必需 | [SortOrder](../../Enumeration/SortOrder.md) |  | Key3 中指定值的排序顺序。 |
| sHeader | 必需 | [SortHeader](../../Enumeration/SortHeader.md) |  | 指定第一行是否包含标题信息。 |
| sOrientation | 必需 | [SortOrientation](../../Enumeration/SortOrientation.md) |  | 指定排序应按行（默认）还是按列。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例根据请求中指定的参数对给定范围内的单元格进行排序。

```javascript editor-xlsx
// How to sort values of cells specifying the order.

// Get a range and sort its values.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(2016);
worksheet.GetRange("A2").SetValue(2015);
worksheet.GetRange("A3").SetValue(2018);
worksheet.GetRange("A4").SetValue(2014);
worksheet.GetRange("A5").SetValue(2010);
worksheet.GetRange("B1").SetValue(150);
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(260);
worksheet.GetRange("B4").SetValue(120);
worksheet.GetRange("B5").SetValue(100);
worksheet.GetRange("C1").SetValue("C");
worksheet.GetRange("C2").SetValue("B");
worksheet.GetRange("C3").SetValue("A");
worksheet.GetRange("C4").SetValue("G");
worksheet.GetRange("C5").SetValue("E");
worksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");
```
