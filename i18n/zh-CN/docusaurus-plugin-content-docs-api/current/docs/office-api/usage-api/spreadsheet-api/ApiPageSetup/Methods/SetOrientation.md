# SetOrientation

设置打印工作表时使用的页面方向。

## 语法

```javascript
expression.SetOrientation(sOrientation);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sOrientation | 必需 | [PageOrientation](../../Enumeration/PageOrientation.md) |  | 页面方向类型。 |

## 返回值

boolean

## 示例

在电子表格中将打印的页面方向设置为横向。

```javascript editor-xlsx
// How do I switch a worksheet to landscape orientation when printing in a spreadsheet?

// Print the sheet sideways (landscape) instead of upright (portrait) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOrientation("xlLandscape");
```
