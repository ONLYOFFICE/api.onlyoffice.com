# SetCenterHorizontally

设置打印时工作表是否在页面上水平居中。

## 语法

```javascript
expression.SetCenterHorizontally(bCenter);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bCenter | 必需 | boolean |  | 指定工作表是否在页面上水平居中。 |

## 返回值

boolean

## 示例

在电子表格中使打印内容在页面上水平居中。

```javascript editor-xlsx
// How do I center the worksheet between the left and right margins when printing in a spreadsheet?

// Make the printout horizontally centered on the page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterHorizontally(true);
```
