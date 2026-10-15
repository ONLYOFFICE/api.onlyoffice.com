# SetTopMargin

设置上边距的大小。

## 语法

```javascript
expression.SetTopMargin(nMargin);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | 必需 | number |  | 以毫米为单位的上边距大小。 |

## 返回值

boolean

## 示例

在电子表格中为工作表定义上页边距。

```javascript editor-xlsx
// How do I set the top margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing on the top side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetTopMargin(20);
```
