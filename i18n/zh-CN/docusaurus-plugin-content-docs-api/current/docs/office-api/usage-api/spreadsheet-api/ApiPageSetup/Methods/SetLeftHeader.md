# SetLeftHeader

设置打印工作表时使用的页眉左侧部分。

## 语法

```javascript
expression.SetLeftHeader(sText);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 页眉左侧部分的文本（可包含 &P、&D 等格式代码）。 |

## 返回值

boolean

## 示例

在电子表格中为页眉添加左侧文本以进行打印。

```javascript editor-xlsx
// How do I put text on the left side of the header in a spreadsheet?

// Show a left header when printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftHeader("Confidential");
```
