# SetDifferentFirstPageHeaderFooter

设置打印的首页是否使用不同的页眉和页脚。

## 语法

```javascript
expression.SetDifferentFirstPageHeaderFooter(bDifferent);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bDifferent | 必需 | boolean |  | 指定首页是否使用不同的页眉和页脚。 |

## 返回值

boolean

## 示例

在电子表格中为打印的首页使用不同的页眉和页脚。

```javascript editor-xlsx
// How do I set a separate header/footer for the first page when printing in a spreadsheet?

// Enable a distinct first-page header and footer for printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetDifferentFirstPageHeaderFooter(true);
```
