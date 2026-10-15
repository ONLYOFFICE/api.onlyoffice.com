# SetFirstPageNumber

设置打印工作表时使用的起始页码。

## 语法

```javascript
expression.SetFirstPageNumber(nNumber);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nNumber | 必需 | number |  | 起始页码。 |

## 返回值

boolean

## 示例

设置电子表格首页上打印的页码。

```javascript editor-xlsx
// How do I make page numbering start from a specific number when printing a spreadsheet?

// Begin the printed page numbers at a custom value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFirstPageNumber(5);
```
