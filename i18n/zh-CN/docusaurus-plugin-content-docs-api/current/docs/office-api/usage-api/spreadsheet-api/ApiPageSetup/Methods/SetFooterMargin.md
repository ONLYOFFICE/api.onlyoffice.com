# SetFooterMargin

设置页面底部到页脚的距离。

## 语法

```javascript
expression.SetFooterMargin(nMargin);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | 必需 | number |  | 以毫米为单位的页脚边距大小。 |

## 返回值

boolean

## 示例

在电子表格中设置打印时页面底部到页脚的距离。

```javascript editor-xlsx
// How do I change the footer margin (distance from the page edge to the footer) in a spreadsheet?

// Move the footer closer to or further from the bottom edge of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetFooterMargin(12.7);
```
