# SetHeaderMargin

设置页面顶部到页眉的距离。

## 语法

```javascript
expression.SetHeaderMargin(nMargin);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | 必需 | number |  | 以毫米为单位的页眉边距大小。 |

## 返回值

boolean

## 示例

在电子表格中设置打印时页面顶部到页眉的距离。

```javascript editor-xlsx
// How do I change the header margin (distance from the page edge to the header) in a spreadsheet?

// Move the header closer to or further from the top edge of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetHeaderMargin(12.7);
```
