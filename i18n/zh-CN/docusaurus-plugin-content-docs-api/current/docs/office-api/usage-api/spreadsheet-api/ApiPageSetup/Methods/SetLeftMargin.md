# SetLeftMargin

设置左边距的大小。

## 语法

```javascript
expression.SetLeftMargin(nMargin);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | 必需 | number |  | 以毫米为单位的左边距大小。 |

## 返回值

boolean

## 示例

定义电子表格中工作表的左页边距。

```javascript editor-xlsx
// How do I set the left margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing on the left side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftMargin(20);
```
