# SetUnderline

指定当前单元格/单元格范围的内容显示时字符正下方有一条下划线。

## 语法

```javascript
expression.SetUnderline(undelineType);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| undelineType | 必需 | 'none' \| 'single' \| 'singleAccounting' \| 'double' \| 'doubleAccounting' |  | 指定字符下方显示的线条类型。可用值如下：**「none」** - 无下划线；**「single」** - 单下划线；**「singleAccounting」** - 单下划线但不超出单元格边框；**「double」** - 双下划线；**「doubleAccounting」** - 双下划线但不超出单元格边框。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例指定当前单元格的内容显示时字符正下方有一条线。

```javascript editor-xlsx
// How to add underline to the cell value.

// Get a range and add underline to its text.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("The text underlined with a single line");
worksheet.GetRange("A2").SetUnderline("single");
worksheet.GetRange("A4").SetValue("Normal text");
```
