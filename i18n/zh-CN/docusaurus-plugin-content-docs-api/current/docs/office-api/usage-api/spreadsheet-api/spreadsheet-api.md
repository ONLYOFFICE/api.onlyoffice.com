---
sidebar_position: -4
---

# 电子表格 API

电子表格文档的结构比文本文档更简单，大多数电子表格元素都嵌套在*工作表*元素中，所有其他元素都放置在其上。

*单元格*可以被赋予各种值，某些单元格文本属性也可以更改。

*范围*元素可以包含*区域*和*批注*。

一些绘图对象 - *图像*、*形状*、*图表* - 可以直接放置到*工作表*中。

不属于单元格值的文本可以分组到*段落*中并添加到*形状*中。为了方便起见（处理较小的块总是比处理较大的块更容易），文本通常被分成称为*文本片段*的小文本部分。每个段落可以仅由一个文本片段组成，也可以在其中包含数十个文本片段，这取决于段落的复杂性。

## 创建新的电子表格

使用 **ONLYOFFICE Document Builder** 可以通过以下代码构建一个最简单的示例电子表格，其中包含一个名为"sheet 1"的工作表，第一列宽度为 140 像素，A1 单元格的值设置为"New cell"：

``` ts
// create a spreadsheet file in the .xlsx format with ONLYOFFICE Document Builder
builder.CreateFile("xlsx")

// create a new 'oWorksheet' variable and get the created spreadsheet contents
const oWorksheet = Api.GetActiveSheet()

// set the 'sheet 1' name for the current active sheet
oWorksheet.SetName("sheet 1")

// set the width of the first column to 140 pixels
oWorksheet.SetColumnWidth(0, 20)

// set the 'New cell' value to the A1 spreadsheet cell
oWorksheet.GetRange("A1").SetValue("New cell")

// save the resulting spreadsheet as a file in the .xlsx format with a new 'example.xlsx' name
builder.SaveFile("xlsx", "example.xlsx")

// close the spreadsheet file and finish work with ONLYOFFICE Document Builder
builder.CloseFile()
```

## 打开现有的电子表格

如果您想编辑已存在的电子表格，可以使用 **ONLYOFFICE Document Builder** 打开它，获取其元素并根据需要进行更改。在这种情况下，与电子表格编辑器的唯一区别是您不需要电子表格编辑器。电子表格按以下方式打开：

``` ts
// use a path to an existing 'myspreadsheet.xlsx' spreadsheet file to open it with ONLYOFFICE Document Builder
builder.OpenFile("https://example.com/myspreadsheet.xlsx")

// create a new 'oWorksheet' variable and get the created spreadsheet contents
const oWorksheet = Api.GetActiveSheet()

// set the 'sheet 1 renamed' name for the current active sheet
oWorksheet.SetName("sheet 1 renamed")

// set the width of the first column to 140 pixels
oWorksheet.SetColumnWidth(0, 20)

// set the 'New cell' value to the A1 spreadsheet cell
oWorksheet.GetRange("A1").SetValue("New cell")

// save the resulting spreadsheet as a file in the .xlsx format with a new 'example.xlsx' name
builder.SaveFile("xlsx", "example.xlsx")

// close the spreadsheet file and finish work with ONLYOFFICE Document Builder
builder.CloseFile()
```

如您所见，您只需使用 [CDocBuilder](../../../document-builder/builder-framework/CDocBuilder/CDocBuilder.md) 类的 *builder.OpenFile();* 方法，并将必要电子表格的路径作为参数传递即可打开它。在上面的示例中，我们打开 **myspreadsheet.xlsx** 电子表格，获取其第一个工作表并更改工作表名称、第一列宽度，并在其 A1 单元格中输入新值。同样的方式可以更改任何其他电子表格元素。

使用相应的 API 文档部分来了解哪些方法允许您更改某些文档和电子表格元素的格式属性。
