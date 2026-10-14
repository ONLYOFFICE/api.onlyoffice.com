# SetAlignMarginsHeaderFooter

设置页眉和页脚边距是否与页边距对齐。

## 语法

```javascript
expression.SetAlignMarginsHeaderFooter(bAlign);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAlign | 必需 | boolean |  | 指定页眉和页脚是否与页边距对齐。 |

## 返回值

boolean

## 示例

在电子表格中将页眉和页脚与页边距对齐以进行打印。

```javascript editor-xlsx
// How do I make the header and footer line up with the left and right page margins in a spreadsheet?

// Keep the header and footer aligned to the page margins instead of the printable area in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetAlignMarginsHeaderFooter(true);
```
