# SetRightMargin

设置右边距的大小。

## 语法

```javascript
expression.SetRightMargin(nMargin);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | 必需 | number |  | 以毫米为单位的右边距大小。 |

## 返回值

boolean

## 示例

在电子表格中为工作表定义右页边距。

```javascript editor-xlsx
// How do I set the right margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing on the right side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetRightMargin(20);
```
