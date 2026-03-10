# ApiRange

表示 ApiRange 类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Address | string | 返回范围地址。 |
| AlignHorizontal | 'left' \| 'right' \| 'center' \| 'justify' | 设置当前单元格范围的文本水平对齐方式。 |
| AlignVertical | 'center' \| 'bottom' \| 'top' \| 'distributed' \| 'justify' | 设置当前单元格范围的文本垂直对齐方式。 |
| Areas | [ApiAreas](../ApiAreas/ApiAreas.md) | 返回区域的集合。 |
| Bold | boolean | 设置当前单元格或单元格范围中文本字符的粗体属性。 |
| Cells | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定范围中所有单元格或指定单元格的 Range 对象。 |
| CellsCount | number | 返回当前范围中的单元格数量。 |
| Characters | [ApiCharacters](../ApiCharacters/ApiCharacters.md) | 返回表示对象文本中字符范围的 ApiCharacters 对象。使用 ApiCharacters 对象格式化文本字符串中的字符。 |
| Col | number | 返回所选单元格的列号。 |
| Cols | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定范围的列的 ApiRange 对象。 |
| ColumnWidth | number | 返回或设置指定范围内所有列的宽度（以磅为单位）。 |
| Columns | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定范围的列的 ApiRange 对象。 |
| ColumnsCount | number | 返回当前范围中的列数。 |
| Comments | [ApiComment](../ApiComment/ApiComment.md) \| null | 返回表示指定工作表中所有批注的 ApiComment 集合。 |
| Count | number | 返回行数或列数。 |
| CurrentRegion | [ApiRange](../ApiRange/ApiRange.md) | 返回表示当前范围周围扩展范围的范围。 |
| DefName | [ApiName](../ApiName/ApiName.md) | 返回 ApiName 对象。 |
| EntireColumn | [ApiRange](../ApiRange/ApiRange.md) | 返回表示包含指定范围的整列的 Range 对象。 |
| EntireRow | [ApiRange](../ApiRange/ApiRange.md) | 返回表示包含指定范围的整行的 Range 对象。 |
| FillColor | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | 返回或设置当前单元格范围的背景颜色。 |
| FontColor | [ApiColor](../ApiColor/ApiColor.md) | 使用先前创建的颜色对象设置当前单元格范围的文本颜色。 |
| FontName | string | 将指定的字体系列设置为当前单元格范围的字体名称。 |
| FontSize | number | 设置当前单元格范围中字符的字体大小。 |
| FormatConditions | [ApiFormatConditions](../ApiFormatConditions/ApiFormatConditions.md) | 返回当前范围的条件格式规则集合。 |
| Formula | string | 返回指定范围第一个单元格的公式或将其设置到此单元格。 |
| Height | number | 返回表示以磅为单位测量的范围高度的值。 |
| Hidden | boolean | 返回或设置值隐藏属性。 |
| Italic | boolean | 设置当前单元格或单元格范围中文本字符的斜体属性。 |
| MergeArea | [ApiRange](../ApiRange/ApiRange.md) | 从合并区域返回单元格或单元格范围。 |
| NumberFormat | string | 设置表示对象格式代码的值。 |
| Orientation | [Angle](../Enumeration/Angle.md) | 返回当前单元格范围的角度。 |
| PivotTable | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | 返回表示包含指定范围左上角的数据透视表报告的 ApiPivotTable 对象。 |
| ReadingOrder | 'context' \| 'ltr' \| 'rtl' | 设置当前单元格范围中文本的方向（阅读顺序）。 |
| Row | number | 返回所选单元格的行号。 |
| RowHeight | number | 返回或设置指定范围内第一行的高度（以磅为单位）。 |
| Rows | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定范围的行的 ApiRange 对象。 |
| RowsCount | number | 返回当前范围中的行数。 |
| Strikeout | boolean | 设置一个值，指示当前单元格或单元格范围的内容是否显示为删除线。 |
| Text | string | 返回指定范围第一个单元格的文本或将其设置到此单元格。 |
| Underline | 'none' \| 'single' \| 'singleAccounting' \| 'double' \| 'doubleAccounting' | 设置应用于字体的下划线类型。 |
| Validation | [ApiValidation](../ApiValidation/ApiValidation.md) | 返回与此范围关联的 ApiValidation 类实例。如果尚不存在验证实例，将创建一个。 |
| Value | string | 返回指定范围第一个单元格的值或将其设置到此单元格。 |
| Value2 | string | 返回指定范围第一个单元格的 value2（不带格式的值）或将其设置到此单元格。 |
| Width | number | 返回表示以磅为单位测量的范围宽度的值。 |
| Worksheet | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回表示包含指定范围的工作表的 ApiWorksheet 对象。 |
| WrapText | boolean | 返回有关单元格自动换行样式的信息，或指定单元格中的文字是否必须换行以适应单元格大小。 |

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) \| null | 向当前范围添加批注。 |
| [AutoFit](./Methods/AutoFit.md) | 无 | 更改范围内列的宽度或行的高度以实现最佳适应。 |
| [Clear](./Methods/Clear.md) | 无 | 清除当前范围。 |
| [ClearContents](./Methods/ClearContents.md) | 无 | 清除当前范围中的所有内容。 |
| [ClearFormats](./Methods/ClearFormats.md) | 无 | 清除当前范围中的所有格式。 |
| [ClearHyperlinks](./Methods/ClearHyperlinks.md) | 无 | 清除当前范围中的所有超链接。 |
| [Copy](./Methods/Copy.md) | 无 | 将范围复制到指定范围或剪贴板。 |
| [Cut](./Methods/Cut.md) | 无 | 剪切范围并将其保存到剪贴板或粘贴到指定范围。 |
| [Delete](./Methods/Delete.md) | 无 | 删除 Range 对象。 |
| [End](./Methods/End.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定范围中指定方向末端的 Range 对象。 |
| [Find](./Methods/Find.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 在当前范围中查找特定信息。 |
| [FindNext](./Methods/FindNext.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 继续使用 [ApiRange#Find](../ApiRange/Methods/Find.md) 方法开始的搜索。查找匹配相同条件的下一个单元格并返回表示该单元格的 ApiRange 对象。这不会影响选择或活动单元格。 |
| [FindPrevious](./Methods/FindPrevious.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 继续使用 [ApiRange#Find](../ApiRange/Methods/Find.md) 方法开始的搜索。查找匹配相同条件的上一个单元格并返回表示该单元格的 ApiRange 对象。这不会影响选择或活动单元格。 |
| [ForEach](./Methods/ForEach.md) | 无 | 为每个单元格执行一次提供的函数。 |
| [GetAddress](./Methods/GetAddress.md) | string \| null | 返回范围地址。 |
| [GetAreas](./Methods/GetAreas.md) | [ApiAreas](../ApiAreas/ApiAreas.md) | 返回范围的集合。 |
| [GetCells](./Methods/GetCells.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定范围中所有单元格或指定单元格的 Range 对象。 |
| [GetCellsCount](./Methods/GetCellsCount.md) | number | 返回当前范围中的单元格数量。 |
| [GetCharacters](./Methods/GetCharacters.md) | [ApiCharacters](../ApiCharacters/ApiCharacters.md) | 返回表示对象文本中字符范围的 ApiCharacters 对象。使用 ApiCharacters 对象格式化文本字符串中的字符。 |
| [GetClassType](./Methods/GetClassType.md) | "range" | 返回 ApiRange 类的类型。 |
| [GetCol](./Methods/GetCol.md) | number | 返回所选单元格的列号。 |
| [GetCols](./Methods/GetCols.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示指定范围中的列的 Range 对象。 |
| [GetColumnWidth](./Methods/GetColumnWidth.md) | number | 返回列宽值。 |
| [GetColumnsCount](./Methods/GetColumnsCount.md) | number | 返回当前范围中的列数。 |
| [GetComment](./Methods/GetComment.md) | [ApiComment](../ApiComment/ApiComment.md) \| null | 返回当前范围的 ApiComment 对象。 |
| [GetCount](./Methods/GetCount.md) | number | 返回行数或列数。 |
| [GetCurrentRegion](./Methods/GetCurrentRegion.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示当前范围周围扩展范围的范围。 |
| [GetDefName](./Methods/GetDefName.md) | [ApiName](../ApiName/ApiName.md) | 返回当前范围的 ApiName 对象。 |
| [GetEntireColumn](./Methods/GetEntireColumn.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示包含指定范围的整列的 Range 对象。 |
| [GetEntireRow](./Methods/GetEntireRow.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示包含指定范围的整行的 Range 对象。 |
| [GetFillColor](./Methods/GetFillColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| 'No Fill' | 返回当前单元格范围的背景颜色。当单元格/单元格范围的背景颜色为空时返回「No Fill」。 |
| [GetFormatConditions](./Methods/GetFormatConditions.md) | [ApiFormatConditions](../ApiFormatConditions/ApiFormatConditions.md) | 返回当前范围的条件格式规则集合。 |
| [GetFormula](./Methods/GetFormula.md) | string \| string[][] | 返回指定范围的公式。 |
| [GetFormulaArray](./Methods/GetFormulaArray.md) | string \| null | 返回当前范围的数组公式。 |
| [GetHidden](./Methods/GetHidden.md) | boolean | 返回值隐藏属性。指定的范围必须跨越整列或整行。 |
| [GetNumberFormat](./Methods/GetNumberFormat.md) | string \| null | 返回表示当前范围的格式代码的值。 |
| [GetOrientation](./Methods/GetOrientation.md) | [Angle](../Enumeration/Angle.md) | 返回当前范围的角度。 |
| [GetPivotTable](./Methods/GetPivotTable.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | 返回表示包含指定范围左上角的数据透视表报告的 ApiPivotTable 对象。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示单元格或单元格范围的 Range 对象。当应用于 Range 对象时，该属性相对于该 Range 对象。 |
| [GetRow](./Methods/GetRow.md) | number | 返回所选单元格的行号。 |
| [GetRowHeight](./Methods/GetRowHeight.md) | [pt](../Enumeration/pt.md) | 返回行高值。 |
| [GetRows](./Methods/GetRows.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回表示指定范围中的行的 Range 对象。如果指定的行在 Range 对象之外，将返回一个新的 Range，表示指定行中原始范围列之间的单元格。 |
| [GetRowsCount](./Methods/GetRowsCount.md) | number | 返回当前范围中的行数。 |
| [GetText](./Methods/GetText.md) | string \| string[][] | 返回指定范围的文本。 |
| [GetValidation](./Methods/GetValidation.md) | [ApiValidation](../ApiValidation/ApiValidation.md) | 返回与此范围关联的数据验证对象。如果尚不存在验证对象，将创建一个。 |
| [GetValue](./Methods/GetValue.md) | string \| string[][] | 返回指定范围的值。 |
| [GetValue2](./Methods/GetValue2.md) | string \| string[][] | 返回指定范围的 Value2 属性（不带格式的值）。 |
| [GetWorksheet](./Methods/GetWorksheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回表示包含指定范围的工作表的 Worksheet 对象。它将以只读模式可用。 |
| [GetWrapText](./Methods/GetWrapText.md) | boolean | 返回有关单元格自动换行样式的信息。 |
| [Insert](./Methods/Insert.md) | 无 | 将单元格或单元格范围插入工作表或宏表，并移动其他单元格以腾出空间。 |
| [Merge](./Methods/Merge.md) | 无 | 将选定的单元格范围合并为单个单元格或单元格行。 |
| [Offset](./Methods/Offset.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 返回从当前范围偏移的 Range 对象。 |
| [Paste](./Methods/Paste.md) | 无 | 将 Range 对象粘贴到指定范围。 |
| [PasteSpecial](./Methods/PasteSpecial.md) | 无 | 使用特殊粘贴选项将 Range 对象粘贴到指定范围。 |
| [Replace](./Methods/Replace.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 将范围中的特定信息替换为另一个。 |
| [Resize](./Methods/Resize.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | 通过更改行数和列数来调整当前范围的大小。 |
| [Select](./Methods/Select.md) | 无 | 选择当前范围。 |
| [SetAlignHorizontal](./Methods/SetAlignHorizontal.md) | boolean | 设置当前单元格范围中文本的水平对齐方式。 |
| [SetAlignVertical](./Methods/SetAlignVertical.md) | boolean | 设置当前单元格范围中文本的垂直对齐方式。 |
| [SetAutoFilter](./Methods/SetAutoFilter.md) | 无 | 向当前范围添加自动筛选。 |
| [SetBold](./Methods/SetBold.md) | 无 | 设置当前单元格或单元格范围中文本字符的粗体属性。 |
| [SetBorders](./Methods/SetBorders.md) | 无 | 使用指定的参数设置单元格/单元格范围的边框。 |
| [SetColumnWidth](./Methods/SetColumnWidth.md) | 无 | 设置当前范围内所有列的宽度。一个列宽单位等于「常规」样式中一个字符的宽度。对于比例字体，使用字符 0（零）的宽度。 |
| [SetFillColor](./Methods/SetFillColor.md) | 无 | 使用先前创建的颜色对象设置当前单元格范围的背景颜色。当先前创建的颜色对象为空时设置为「No Fill」。 |
| [SetFontColor](./Methods/SetFontColor.md) | 无 | 使用先前创建的颜色对象设置当前单元格范围的文本颜色。 |
| [SetFontName](./Methods/SetFontName.md) | 无 | 将指定的字体系列设置为当前单元格范围的字体名称。 |
| [SetFontSize](./Methods/SetFontSize.md) | 无 | 设置当前单元格范围中字符的字体大小。 |
| [SetFormulaArray](./Methods/SetFormulaArray.md) | boolean | 设置当前范围的数组公式。 |
| [SetHidden](./Methods/SetHidden.md) | 无 | 设置值隐藏属性。指定的范围必须跨越整列或整行。 |
| [SetItalic](./Methods/SetItalic.md) | 无 | 设置当前单元格或单元格范围中文本字符的斜体属性。 |
| [SetNumberFormat](./Methods/SetNumberFormat.md) | 无 | 指定单元格中的数字应视为数字、货币、日期、时间等还是仅作为文本。 |
| [SetOffset](./Methods/SetOffset.md) | 无 | 设置单元格偏移量。 |
| [SetOrientation](./Methods/SetOrientation.md) | 无 | 设置当前单元格范围的角度。 |
| [SetReadingOrder](./Methods/SetReadingOrder.md) | 无 | 设置当前单元格范围中文本的方向（阅读顺序）。 |
| [SetRowHeight](./Methods/SetRowHeight.md) | 无 | 设置行高值。 |
| [SetSort](./Methods/SetSort.md) | 无 | 根据请求中指定的参数对给定范围内的单元格进行排序。 |
| [SetStrikeout](./Methods/SetStrikeout.md) | 无 | 指定单元格/单元格范围的内容显示时在内容中心有一条水平删除线。 |
| [SetUnderline](./Methods/SetUnderline.md) | 无 | 指定当前单元格/单元格范围的内容显示时字符正下方有一条下划线。 |
| [SetValue](./Methods/SetValue.md) | boolean | 设置当前单元格或单元格范围的值。 |
| [SetWrap](./Methods/SetWrap.md) | 无 | 指定单元格中的文字是否必须换行以适应单元格大小。 |
| [UnMerge](./Methods/UnMerge.md) | 无 | 将选定的合并单元格范围拆分为单个单元格。 |
