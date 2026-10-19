# SetCenterFooter

设置打印工作表时使用的页脚中间部分。

## 语法

```javascript
expression.SetCenterFooter(sText);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 页脚中间部分的文本（可包含 &P、&D 等格式代码）。 |

## 返回值

boolean

## 示例

在电子表格中为页脚添加居中文本以进行打印。

```javascript editor-xlsx
// How do I put the page number in the center of the footer in a spreadsheet?

// Show a centered footer with the current page and total page count when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterFooter("Page &P of &N");
```
