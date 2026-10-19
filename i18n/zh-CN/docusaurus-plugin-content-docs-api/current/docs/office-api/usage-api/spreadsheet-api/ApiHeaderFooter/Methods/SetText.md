# SetText

设置此页眉或页脚部分的文本，同时保留其他两个部分。

## 语法

```javascript
expression.SetText(sText);
```

`expression` - 表示 [ApiHeaderFooter](../ApiHeaderFooter.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 该部分的文本（可包含 &P、&D 等格式代码）。 |

## 返回值

boolean

## 示例

在电子表格中设置打印时页眉或页脚部分的文本。

```javascript editor-xlsx
// How do I put the page number in the even-pages center header in a spreadsheet?

// Give a header/footer section its own text (with formatting codes) when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let centerHeader = pageSetup.GetEvenPage().GetCenterHeader();
centerHeader.SetText("Even page &P");
```
