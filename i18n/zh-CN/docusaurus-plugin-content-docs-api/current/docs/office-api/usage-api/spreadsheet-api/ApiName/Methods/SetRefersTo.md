# SetRefersTo

设置名称定义引用的公式。

## 语法

```javascript
expression.SetRefersTo(sRef);
```

`expression` - 表示 [ApiName](../ApiName.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRef | 必需 | string |  | 区域引用，必须包含工作表名称，后跟 ! 符号和单元格区域。示例："Sheet1!$A$1:$B$2"。 |

## 返回值

boolean

## 示例

将电子表格中的命名范围指向特定公式。

```javascript editor-xlsx
// How do I make a named range refer to a formula instead of plain cells in a spreadsheet?

// Reassign a range name so it targets a calculated expression in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("=SUM(A1:B1)");
Api.AddDefName("summa", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("summa");
defName.SetRefersTo("=SUM(A1:B1)");
worksheet.GetRange("A3").SetValue("The name 'summa' refers to the formula from the cell C1.");
```
