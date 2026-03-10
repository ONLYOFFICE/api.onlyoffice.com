# GetRefersTo

返回名称定义引用的公式。

## 语法

```javascript
expression.GetRefersTo();
```

`expression` - 表示 [ApiName](../ApiName.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取名称定义引用的公式。

```javascript editor-xlsx
// How to add a defname that refers to the formula from the specified range.

// Add a defname for the formula and then display it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("=SUM(A1:B1)");
Api.AddDefName("summa", "Sheet1!$A$1:$B$1");
let defName = Api.GetDefName("summa");
defName.SetRefersTo("=SUM(A1:B1)");
worksheet.GetRange("A3").SetValue("The name 'summa' refers to the formula from the cell C1.");
worksheet.GetRange("A4").SetValue("Formula: " + defName.GetRefersTo());
```
