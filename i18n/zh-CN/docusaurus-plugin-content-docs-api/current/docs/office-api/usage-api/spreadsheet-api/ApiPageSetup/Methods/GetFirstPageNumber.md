# GetFirstPageNumber

返回打印工作表时使用的起始页码。页码为自动编号时返回 null。

## 语法

```javascript
expression.GetFirstPageNumber();
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number \| null

## 示例

读取打印电子表格时使用的起始页码。

```javascript editor-xlsx
// How do I find out what number the printed pages start from in a spreadsheet?

// Check the starting page number before printing a spreadsheet (null means automatic).

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFirstPageNumber(5);
let firstPageNumber = pageSetup.GetFirstPageNumber();
worksheet.GetRange("A1").SetValue("First page number: " + firstPageNumber);
```
