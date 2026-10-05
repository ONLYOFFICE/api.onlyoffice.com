# SetScopeType

设置条件格式规则的作用域类型。

继承自 [ApiFormatCondition.SetScopeType](../../ApiFormatCondition/Methods/SetScopeType.md)。

## 语法

```javascript
expression.SetScopeType(ScopeType);
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ScopeType | 必需 | [XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md) |  | 作用域类型：“xlSelectionScope”、“xlDataFieldScope” 或 “xlFieldsScope”。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中定义唯一值格式规则的范围边界。

```javascript editor-xlsx
// How do I specify what area a unique values formatting rule covers in a spreadsheet?

// Narrow or widen the scope a unique values rule uses when detecting entries in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetScopeType(0);

worksheet.GetRange("C1").SetValue("Scope type set to 0");
```
