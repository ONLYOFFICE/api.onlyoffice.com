# SetFitToPagesTall

设置打印时工作表缩放到的页高数（0 表示自动）。设置此属性会启用“调整为页面大小”模式。

## 语法

```javascript
expression.SetFitToPagesTall(nPages);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPages | 必需 | number |  | 页高数（0 表示自动）。 |

## 返回值

boolean

## 示例

在电子表格中缩放打印输出以适应指定的页高数。

```javascript editor-xlsx
// How do I fit all rows onto a fixed number of pages when printing in a spreadsheet?

// Shrink the worksheet so it prints within a fixed number of pages vertically in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFitToPagesTall(2);
```
