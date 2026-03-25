# ApiInlineLvlSdt

表示 ApiInlineLvlSdt 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | 向当前内联内容控件添加批注。💡 请注意，此内联内容控件必须在文档中。 |
| [AddElement](./Methods/AddElement.md) | boolean | 向内联文本内容控件添加元素。 |
| [AddListItem](./Methods/AddListItem.md) | boolean | 向组合框列表或下拉列表添加项目。 |
| [AddText](./Methods/AddText.md) | boolean | 向当前内容控件添加文本。 |
| [Copy](./Methods/Copy.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 创建内联内容控件的副本。忽略批注、脚注引用、复杂域。 |
| [Delete](./Methods/Delete.md) | boolean | 删除内容控件及其内容。如果 keepContent 为 true，则不删除内容。 |
| [GetAlias](./Methods/GetAlias.md) | string | 返回当前容器的别名属性。 |
| [GetAppearance](./Methods/GetAppearance.md) | "boundingBox" \| "hidden" | 返回内容控件的可视化类型。 |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 返回当前内容控件的背景颜色。 |
| [GetBorderColor](./Methods/GetBorderColor.md) | [ApiColor](../ApiColor/ApiColor.md) | 返回当前内容控件的边框颜色。 |
| [GetClassType](./Methods/GetClassType.md) | "inlineLvlSdt" | 返回 ApiInlineLvlSdt 类的类型。 |
| [GetDataBinding](./Methods/GetDataBinding.md) | [XmlMapping](../Enumeration/XmlMapping.md) | 检索内容控件的数据绑定。 |
| [GetDataForXmlMapping](./Methods/GetDataForXmlMapping.md) | string | 返回用于 XML 映射的内容控件数据。 |
| [GetDate](./Methods/GetDate.md) | undefined \| Date | 从日期选择器内容控件中检索所选日期值并将其作为 Date 对象返回。如果内容控件不是日期选择器，则抛出错误。 |
| [GetDropdownList](./Methods/GetDropdownList.md) | [ApiContentControlList](../ApiContentControlList/ApiContentControlList.md) | 返回组合框/下拉列表内容控件的值列表。 |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | 使用指定位置返回当前内联文本内容控件的元素。 |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | 返回当前内联文本内容控件中的元素数量。文本内容控件默认创建时包含一个文本运行，因此即使未添加任何元素，此方法也会返回值「1」。 |
| [GetId](./Methods/GetId.md) | string | 返回当前内容控件的唯一 ID。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前内容控件的内部 ID。 |
| [GetLabel](./Methods/GetLabel.md) | number | 返回当前容器的标签属性。 |
| [GetLock](./Methods/GetLock.md) | [SdtLock](../Enumeration/SdtLock.md) | 返回当前容器的锁定类型。 |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null | 返回包含当前内容控件的内容控件。 |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | 返回包含当前内容控件的段落。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回包含当前内容控件的表格。 |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回包含当前内容控件的表格单元格。 |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | 返回当前内联内容控件的占位符文本。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定内容控件中包含的文档部分的 Range 对象。 |
| [GetTag](./Methods/GetTag.md) | string | 返回当前容器的标签属性。 |
| [IsCheckBox](./Methods/IsCheckBox.md) | boolean | 检查内容控件是否为复选框。 |
| [IsCheckBoxChecked](./Methods/IsCheckBoxChecked.md) | boolean | 确定复选框内容控件当前是选中还是未选中。如果内容控件不是复选框，则抛出错误。 |
| [IsComboBox](./Methods/IsComboBox.md) | boolean | 检查内容控件是否为组合框列表。 |
| [IsDatePicker](./Methods/IsDatePicker.md) | boolean | 检查内容控件是否为日期选择器。 |
| [IsDropDownList](./Methods/IsDropDownList.md) | boolean | 检查内容控件是否为下拉列表。 |
| [IsForm](./Methods/IsForm.md) | boolean | 检查内容控件是否为表单。 |
| [IsPicture](./Methods/IsPicture.md) | boolean | 检查内容控件是否为图片控件。此方法验证内容控件是否为图片控件。 |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | boolean | 将光标放置在当前内容控件之前/之后。 |
| [Push](./Methods/Push.md) | boolean | 向内联文本内容控件的末尾添加元素。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 从当前内联文本内容控件中删除所有元素。 |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | 使用指定位置从当前内联文本内容控件中删除元素。 |
| [RemoveListItem](./Methods/RemoveListItem.md) | boolean | 从组合框列表或下拉列表中删除项目。 |
| [Select](./Methods/Select.md) | boolean | 选择当前内容控件。 |
| [SelectListItem](./Methods/SelectListItem.md) | boolean | 设置组合框列表或下拉列表的选中项。 |
| [SetAlias](./Methods/SetAlias.md) | boolean | 设置当前容器的别名属性。 |
| [SetAppearance](./Methods/SetAppearance.md) | 无 | 设置内容控件的可视化类型。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 设置当前内容控件的背景颜色。 |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | 设置当前内容控件的边框颜色。 |
| [SetCheckBoxChecked](./Methods/SetCheckBoxChecked.md) | boolean | 设置内容控件的复选框值。此方法将内容控件的复选框状态更新为选中或未选中。 |
| [SetDataBinding](./Methods/SetDataBinding.md) | boolean | 设置当前内容控件的数据绑定。 |
| [SetDate](./Methods/SetDate.md) | boolean | 设置日期选择器内容控件的值。 |
| [SetDateFormat](./Methods/SetDateFormat.md) | boolean | 设置日期选择器内容控件的日期格式。此方法允许设置日期在日期选择器内容控件中显示的格式。格式字符串应使用常见的日期格式模式指定（例如，"mm.dd.yyyy"）。 |
| [SetId](./Methods/SetId.md) | boolean | 指定当前内容控件的唯一 ID。 |
| [SetLabel](./Methods/SetLabel.md) | boolean | 向当前内联文本内容控件添加字符串标签。 |
| [SetLock](./Methods/SetLock.md) | boolean | 设置当前内联文本内容控件的锁定：**"unlocked"** - 内容可以编辑，容器可以删除。**"contentLocked"** - 内容无法编辑。**"sdtContentLocked"** - 内容无法编辑，容器无法删除。**"sdtLocked"** - 容器无法删除。 |
| [SetPicture](./Methods/SetPicture.md) | boolean | 设置图片内容控件的内容（图像）。此方法通过从提供的 URL 设置图像来更新内容控件中的图片。URL 应该是指向图像的互联网链接。 |
| [SetPictureSize](./Methods/SetPictureSize.md) | boolean | 设置内容控件中图片的大小。如果内容控件是图片，此方法会调整图像的宽度和高度。 |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | 设置当前内联内容控件的占位符文本。*无法设置为复选框或单选按钮* |
| [SetTag](./Methods/SetTag.md) | boolean | 向当前内联文本内容控件添加字符串标签。 |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | 将文本设置应用于内容控件的内容。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiInlineLvlSdt 对象转换为 JSON 对象。 |
| [UpdateFromXmlMapping](./Methods/UpdateFromXmlMapping.md) | boolean | 使用 XML 映射中的值更新内容控件。 |
