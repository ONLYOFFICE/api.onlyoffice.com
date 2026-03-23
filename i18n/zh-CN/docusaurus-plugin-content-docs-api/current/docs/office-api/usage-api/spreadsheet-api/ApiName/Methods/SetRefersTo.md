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
| sRef | 必需 | string |  | 必须包含工作表名称的区域引用，后跟 ! 符号和单元格区域。示例："Sheet1!$A$1:$B$2"。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置名称定义引用的公式。

```javascript editor-xlsx
// How to add a name and refer it to the formula.

// Create new ranges and a formula, refer a name to the formula then display it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("=SUM(A1:B1)");
Api.AddDefName("summa", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("summa");
defName.SetRefersTo("=SUM(A1:B1)");
worksheet.GetRange("A3").SetValue("The name 'summa' refers to the formula from the cell C1.");
```
