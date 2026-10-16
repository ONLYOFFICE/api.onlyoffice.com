# SetScaleWithDocHeaderFooter

设置在为打印而缩放文档时页眉和页脚是否随文档一起缩放。

## 语法

```javascript
expression.SetScaleWithDocHeaderFooter(bScale);
```

`expression` - 表示 [ApiPageSetup](../ApiPageSetup.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bScale | 必需 | boolean |  | 指定页眉和页脚是否随文档一起缩放。 |

## 返回值

boolean

## 示例

在电子表格中打印时使页眉和页脚随工作表一起缩放。

```javascript editor-xlsx
// How do I keep the header/footer font size in sync with the print scaling in a spreadsheet?

// Make the header and footer shrink or grow with the document scale when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetScaleWithDocHeaderFooter(true);
```
