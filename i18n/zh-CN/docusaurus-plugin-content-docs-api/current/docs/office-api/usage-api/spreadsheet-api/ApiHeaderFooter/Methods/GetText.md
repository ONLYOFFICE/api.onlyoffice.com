# GetText

返回此页眉或页脚部分的文本。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiHeaderFooter](../ApiHeaderFooter.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

在电子表格中读取页眉或页脚部分的文本。

```javascript editor-xlsx
// How do I find out what text is in the even-pages center header in a spreadsheet?

// Check the current text (including formatting codes) of a header/footer section in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetOddAndEvenPagesHeaderFooter(true);
let centerHeader = pageSetup.GetEvenPage().GetCenterHeader();
centerHeader.SetText("Even page &P");
let text = centerHeader.GetText();
worksheet.GetRange("A1").SetValue("Even center header: " + text);
```
