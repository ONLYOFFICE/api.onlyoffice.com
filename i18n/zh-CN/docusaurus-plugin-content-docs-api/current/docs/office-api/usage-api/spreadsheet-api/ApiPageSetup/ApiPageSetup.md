# ApiPageSetup

表示工作表页面设置（打印布局）的类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| AlignMarginsHeaderFooter | boolean | 返回或设置页眉和页脚边距是否与页边距对齐。 |
| BottomMargin | number | 返回或设置下边距大小，以毫米为单位。 |
| CenterFooter | string | 返回或设置（奇数页）页脚的中间部分。 |
| CenterHeader | string | 返回或设置（奇数页）页眉的中间部分。 |
| CenterHorizontally | boolean | 返回或设置打印时工作表是否在页面上水平居中。 |
| CenterVertically | boolean | 返回或设置打印时工作表是否在页面上垂直居中。 |
| DifferentFirstPageHeaderFooter | boolean | 返回或设置打印的第一页是否使用不同的页眉和页脚。 |
| EvenPage | [ApiPage](../ApiPage/ApiPage.md) | 返回偶数页的页眉和页脚。 |
| FirstPage | [ApiPage](../ApiPage/ApiPage.md) | 返回首页的页眉和页脚。 |
| FirstPageNumber | number \| null | 返回或设置起始页码（null 表示自动）。 |
| FitToPagesTall | number | 返回或设置打印时工作表缩放到的页高数（0 表示自动）。 |
| FitToPagesWide | number | 返回或设置打印时工作表缩放到的页宽数（0 表示自动）。 |
| FooterMargin | number | 返回或设置页面底部到页脚的距离，以毫米为单位。 |
| HeaderMargin | number | 返回或设置页面顶部到页眉的距离，以毫米为单位。 |
| LeftFooter | string | 返回或设置（奇数页）页脚的左侧部分。 |
| LeftHeader | string | 返回或设置（奇数页）页眉的左侧部分。 |
| LeftMargin | number | 返回或设置以毫米为单位的左边距大小。 |
| OddAndEvenPagesHeaderFooter | boolean | 返回或设置奇数页和偶数页是否使用不同的页眉和页脚。 |
| Orientation | [PageOrientation](../Enumeration/PageOrientation.md) | 返回或设置页面方向。 |
| PaperSize | [PaperSize](../Enumeration/PaperSize.md) | 返回或设置纸张大小。 |
| Parent | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回页面设置的父工作表。 |
| PrintArea | string | 返回或设置要打印的范围（空字符串表示打印整个工作表）。 |
| PrintGridlines | boolean | 返回或设置是否打印单元格网格线。 |
| PrintHeadings | boolean | 返回或设置是否打印行标题和列标题。 |
| PrintTitleColumns | string | 返回或设置在每个打印页左侧重复的列。 |
| PrintTitleRows | string | 返回或设置在每个打印页顶部重复的行。 |
| RightFooter | string | 返回或设置（奇数页）页脚的右侧部分。 |
| RightHeader | string | 返回或设置（奇数页）页眉的右侧部分。 |
| RightMargin | number | 返回或设置以毫米为单位的右边距大小。 |
| ScaleWithDocHeaderFooter | boolean | 返回或设置打印时页眉和页脚是否随文档一起缩放。 |
| TopMargin | number | 返回或设置以毫米为单位的上边距大小。 |
| Zoom | number | 返回或设置打印缩放比例，以百分比表示（10-400）。 |

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetAlignMarginsHeaderFooter](./Methods/GetAlignMarginsHeaderFooter.md) | boolean | 返回页眉和页脚边距是否与页边距对齐。 |
| [GetBottomMargin](./Methods/GetBottomMargin.md) | number | 返回下边距的大小。 |
| [GetCenterFooter](./Methods/GetCenterFooter.md) | string | 返回打印工作表时使用的页脚中间部分。 |
| [GetCenterHeader](./Methods/GetCenterHeader.md) | string | 返回打印工作表时使用的页眉中间部分。 |
| [GetCenterHorizontally](./Methods/GetCenterHorizontally.md) | boolean | 返回打印时工作表是否在页面上水平居中。 |
| [GetCenterVertically](./Methods/GetCenterVertically.md) | boolean | 返回打印时工作表是否在页面上垂直居中。 |
| [GetDifferentFirstPageHeaderFooter](./Methods/GetDifferentFirstPageHeaderFooter.md) | boolean | 返回打印的首页是否使用不同的页眉和页脚。 |
| [GetEvenPage](./Methods/GetEvenPage.md) | [ApiPage](../ApiPage/ApiPage.md) | 返回工作表偶数页的页眉和页脚。仅当启用 [ApiPageSetup#GetOddAndEvenPagesHeaderFooter](../ApiPageSetup/Methods/GetOddAndEvenPagesHeaderFooter.md) 时，返回的对象才有意义。 |
| [GetFirstPage](./Methods/GetFirstPage.md) | [ApiPage](../ApiPage/ApiPage.md) | 返回工作表首页的页眉和页脚。仅当启用 [ApiPageSetup#GetDifferentFirstPageHeaderFooter](../ApiPageSetup/Methods/GetDifferentFirstPageHeaderFooter.md) 时，返回的对象才有意义。 |
| [GetFirstPageNumber](./Methods/GetFirstPageNumber.md) | number \| null | 返回打印工作表时使用的起始页码。页码为自动编号时返回 null。 |
| [GetFitToPagesTall](./Methods/GetFitToPagesTall.md) | number | 返回打印时工作表缩放到的页高数（0 表示自动）。 |
| [GetFitToPagesWide](./Methods/GetFitToPagesWide.md) | number | 返回打印时工作表缩放到的页宽数（0 表示自动）。 |
| [GetFooterMargin](./Methods/GetFooterMargin.md) | number | 返回页面底部到页脚的距离。 |
| [GetHeaderMargin](./Methods/GetHeaderMargin.md) | number | 返回页面顶部到页眉的距离。 |
| [GetLeftFooter](./Methods/GetLeftFooter.md) | string | 返回打印工作表时使用的页脚左侧部分。 |
| [GetLeftHeader](./Methods/GetLeftHeader.md) | string | 返回打印工作表时使用的页眉左侧部分。 |
| [GetLeftMargin](./Methods/GetLeftMargin.md) | number | 返回左边距的大小。 |
| [GetOddAndEvenPagesHeaderFooter](./Methods/GetOddAndEvenPagesHeaderFooter.md) | boolean | 返回奇数页和偶数页是否使用不同的页眉和页脚。 |
| [GetOrientation](./Methods/GetOrientation.md) | [PageOrientation](../Enumeration/PageOrientation.md) | 返回打印工作表时使用的页面方向。 |
| [GetPaperSize](./Methods/GetPaperSize.md) | [PaperSize](../Enumeration/PaperSize.md) | 返回打印工作表时使用的纸张大小。 |
| [GetParent](./Methods/GetParent.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回拥有此页面设置的工作表。 |
| [GetPrintArea](./Methods/GetPrintArea.md) | string | 以字符串形式返回要打印的范围（打印区域），打印整个工作表时返回空字符串。 |
| [GetPrintGridlines](./Methods/GetPrintGridlines.md) | boolean | 返回是否随工作表一起打印单元格网格线。 |
| [GetPrintHeadings](./Methods/GetPrintHeadings.md) | boolean | 返回是否随工作表一起打印行标题和列标题。 |
| [GetPrintTitleColumns](./Methods/GetPrintTitleColumns.md) | string | 返回在每个打印页左侧重复的列，如果没有则返回空字符串。 |
| [GetPrintTitleRows](./Methods/GetPrintTitleRows.md) | string | 返回在每个打印页顶部重复的行，如果没有则返回空字符串。 |
| [GetRightFooter](./Methods/GetRightFooter.md) | string | 返回打印工作表时使用的页脚右侧部分。 |
| [GetRightHeader](./Methods/GetRightHeader.md) | string | 返回打印工作表时使用的页眉右侧部分。 |
| [GetRightMargin](./Methods/GetRightMargin.md) | number | 返回右边距的大小。 |
| [GetScaleWithDocHeaderFooter](./Methods/GetScaleWithDocHeaderFooter.md) | boolean | 返回在为打印而缩放文档时页眉和页脚是否随文档一起缩放。 |
| [GetTopMargin](./Methods/GetTopMargin.md) | number | 返回上边距的大小。 |
| [GetZoom](./Methods/GetZoom.md) | number | 返回打印工作表时使用的缩放比例（以百分比表示）。 |
| [SetAlignMarginsHeaderFooter](./Methods/SetAlignMarginsHeaderFooter.md) | boolean | 设置页眉和页脚边距是否与页边距对齐。 |
| [SetBottomMargin](./Methods/SetBottomMargin.md) | boolean | 设置下边距的大小。 |
| [SetCenterFooter](./Methods/SetCenterFooter.md) | boolean | 设置打印工作表时使用的页脚中间部分。 |
| [SetCenterHeader](./Methods/SetCenterHeader.md) | boolean | 设置打印工作表时使用的页眉中间部分。 |
| [SetCenterHorizontally](./Methods/SetCenterHorizontally.md) | boolean | 设置打印时工作表是否在页面上水平居中。 |
| [SetCenterVertically](./Methods/SetCenterVertically.md) | boolean | 设置打印时工作表是否在页面上垂直居中。 |
| [SetDifferentFirstPageHeaderFooter](./Methods/SetDifferentFirstPageHeaderFooter.md) | boolean | 设置打印的首页是否使用不同的页眉和页脚。 |
| [SetFirstPageNumber](./Methods/SetFirstPageNumber.md) | boolean | 设置打印工作表时使用的起始页码。 |
| [SetFitToPagesTall](./Methods/SetFitToPagesTall.md) | boolean | 设置打印时工作表缩放到的页高数（0 表示自动）。设置此属性会启用“调整为页面大小”模式。 |
| [SetFitToPagesWide](./Methods/SetFitToPagesWide.md) | boolean | 设置打印时工作表缩放到的页宽数（0 表示自动）。设置此属性会启用“调整为页面大小”模式。 |
| [SetFooterMargin](./Methods/SetFooterMargin.md) | boolean | 设置页面底部到页脚的距离。 |
| [SetHeaderMargin](./Methods/SetHeaderMargin.md) | boolean | 设置页面顶部到页眉的距离。 |
| [SetLeftFooter](./Methods/SetLeftFooter.md) | boolean | 设置打印工作表时使用的页脚左侧部分。 |
| [SetLeftHeader](./Methods/SetLeftHeader.md) | boolean | 设置打印工作表时使用的页眉左侧部分。 |
| [SetLeftMargin](./Methods/SetLeftMargin.md) | boolean | 设置左边距的大小。 |
| [SetOddAndEvenPagesHeaderFooter](./Methods/SetOddAndEvenPagesHeaderFooter.md) | boolean | 设置奇数页和偶数页是否使用不同的页眉和页脚。 |
| [SetOrientation](./Methods/SetOrientation.md) | boolean | 设置打印工作表时使用的页面方向。 |
| [SetPaperSize](./Methods/SetPaperSize.md) | boolean | 设置打印工作表时使用的纸张大小。 |
| [SetPrintArea](./Methods/SetPrintArea.md) | boolean | 设置要打印的范围（打印区域）。传递空字符串可清除打印区域并打印整个工作表。 |
| [SetPrintGridlines](./Methods/SetPrintGridlines.md) | boolean | 设置是否随工作表一起打印单元格网格线。 |
| [SetPrintHeadings](./Methods/SetPrintHeadings.md) | boolean | 设置是否随工作表一起打印行标题和列标题。 |
| [SetPrintTitleColumns](./Methods/SetPrintTitleColumns.md) | boolean | 设置在每个打印页左侧重复的列。传递空字符串可将其清除。 |
| [SetPrintTitleRows](./Methods/SetPrintTitleRows.md) | boolean | 设置在每个打印页顶部重复的行。传递空字符串可将其清除。 |
| [SetRightFooter](./Methods/SetRightFooter.md) | boolean | 设置打印工作表时使用的页脚右侧部分。 |
| [SetRightHeader](./Methods/SetRightHeader.md) | boolean | 设置打印工作表时使用的页眉右侧部分。 |
| [SetRightMargin](./Methods/SetRightMargin.md) | boolean | 设置右边距的大小。 |
| [SetScaleWithDocHeaderFooter](./Methods/SetScaleWithDocHeaderFooter.md) | boolean | 设置在为打印而缩放文档时页眉和页脚是否随文档一起缩放。 |
| [SetTopMargin](./Methods/SetTopMargin.md) | boolean | 设置上边距的大小。 |
| [SetZoom](./Methods/SetZoom.md) | boolean | 设置打印工作表时使用的缩放比例（以百分比表示）。设置此属性会关闭“调整为页面大小”模式。 |
