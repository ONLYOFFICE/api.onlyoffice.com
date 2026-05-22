# PasteSpecial

使用特殊粘贴选项将 Range 对象粘贴到指定范围。

## 语法

```javascript
expression.PasteSpecial(sPasteType, sPasteSpecialOperation, bSkipBlanks, bTranspose);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPasteType | 可选 | [PasteType](../../Enumeration/PasteType.md) | "xlPasteAll" | 粘贴选项。 |
| sPasteSpecialOperation | 可选 | [PasteSpecialOperation](../../Enumeration/PasteSpecialOperation.md) | "xlPasteSpecialOperationNone" | 将应用于复制数据的数学运算。 |
| bSkipBlanks | 可选 | boolean | false | 指定当复制区域中出现空白单元格时是否避免替换粘贴区域中的值。 |
| bTranspose | 可选 | boolean | false | 指定粘贴的数据是否从行转置为列。 |

## 返回值

此方法不返回任何数据。

## 示例

使用受控选项将剪贴板数据粘贴到电子表格中的单元格。

```javascript editor-xlsx
// How do I paste only specific parts of copied data, such as values or formats, in a spreadsheet?

// Reuse copied cell content in a new location while choosing exactly what gets transferred in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("test");
worksheet.GetRange("A1").Copy();
worksheet.GetRange("B1").PasteSpecial("xlPasteAll", "xlPasteSpecialOperationNone", false, false);
```
