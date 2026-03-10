# ApiBlockLvlSdt

表示 ApiBlockLvlSdt 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddCaption](./Methods/AddCaption.md) | boolean | 在当前内容控件之后（或之前）添加题注段落。💡 请注意，当前内容控件必须在文档中（不能在页眉/页脚中）。如果当前内容控件位于形状中，则题注将添加在父形状之后（或之前）。 |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | 向当前块级内容控件添加批注。💡 请注意，当前块级内容控件必须在文档中。 |
| [AddElement](./Methods/AddElement.md) | boolean | 向当前容器添加段落、表格或块级内容控件。 |
| [AddText](./Methods/AddText.md) | boolean | 向当前内容控件添加文本。 |
| [Copy](./Methods/Copy.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | 创建块级内容控件的副本。忽略批注、脚注引用和复杂域。 |
| [Delete](./Methods/Delete.md) | boolean | 删除内容控件及其内容。如果 keepContent 为 true，则不删除内容。 |
| [GetAlias](./Methods/GetAlias.md) | string | 返回当前容器的别名属性。 |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | 返回当前内容控件中的内容控件对象集合。 |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | 返回当前内容控件中的绘图对象集合。 |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | 返回当前内容控件中的段落对象集合。 |
| [GetAllTablesOnPage](./Methods/GetAllTablesOnPage.md) | [ApiTable](../ApiTable/ApiTable.md)[] | 返回给定绝对页面上的表格集合。💡 此方法可能会有点慢，因为它会运行文档计算过程来排列指定页面上的表格。 |
| [GetAppearance](./Methods/GetAppearance.md) | "boundingBox" \| "hidden" | 获取内容控件的可视化效果。 |
| [GetBackgroundColor](./Methods/GetBackgroundColor.md) | null \| Object | 返回当前内容控件的背景颜色。 |
| [GetBorderColor](./Methods/GetBorderColor.md) | null \| Object | 返回当前内容控件的边框颜色。 |
| [GetClassType](./Methods/GetClassType.md) | "blockLvlSdt" | 返回 ApiBlockLvlSdt 类的类型。 |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回当前容器的内容。 |
| [GetDataBinding](./Methods/GetDataBinding.md) | [XmlMapping](../Enumeration/XmlMapping.md) | 检索内容控件的数据绑定。 |
| [GetDataForXmlMapping](./Methods/GetDataForXmlMapping.md) | string | 返回用于 XML 映射的内容控件数据。 |
| [GetDropdownList](./Methods/GetDropdownList.md) | [ApiContentControlList](../ApiContentControlList/ApiContentControlList.md) | 返回组合框/下拉列表内容控件的值列表。 |
| [GetId](./Methods/GetId.md) | string | 返回当前内容控件的唯一 ID。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前内容控件的内部 ID。 |
| [GetLabel](./Methods/GetLabel.md) | number | 返回当前容器的标签属性。 |
| [GetLock](./Methods/GetLock.md) | [SdtLock](../Enumeration/SdtLock.md) | 返回当前容器的锁定类型。 |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | 返回包含当前内容控件的内容控件。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回包含当前内容控件的表格。 |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回包含当前内容控件的表格单元格。 |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | 返回当前内容控件的占位符文本。 |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | 返回内容控件在其父元素中的位置。 |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | 返回表示指定内容控件中包含的文档部分的 Range 对象。 |
| [GetTag](./Methods/GetTag.md) | string | 返回当前容器的标签属性。 |
| [IsPicture](./Methods/IsPicture.md) | boolean | 检查内容控件是否为图片控件。此方法验证内容控件是否为图片控件。 |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | boolean | 将光标放置在当前内容控件之前/之后。 |
| [Push](./Methods/Push.md) | boolean | 推送段落、表格或块级内容控件以将其实际添加到当前容器。 |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | 清除当前内容控件的内容。 |
| [ReplaceByElement](./Methods/ReplaceByElement.md) | boolean | 用新元素替换当前内容控件。 |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | 搜索内容控件对象的范围。搜索结果是 ApiRange 对象的集合。 |
| [Select](./Methods/Select.md) | boolean | 选择当前内容控件。 |
| [SetAlias](./Methods/SetAlias.md) | boolean | 设置当前容器的别名属性。 |
| [SetAppearance](./Methods/SetAppearance.md) | 无 | 设置内容控件的可视化效果。 |
| [SetBackgroundColor](./Methods/SetBackgroundColor.md) | boolean | 设置当前内容控件的背景颜色。 |
| [SetBorderColor](./Methods/SetBorderColor.md) | boolean | 设置当前内容控件的边框颜色。 |
| [SetDataBinding](./Methods/SetDataBinding.md) | boolean | 设置内容控件的数据绑定。 |
| [SetId](./Methods/SetId.md) | 无 | 指定当前内容控件的唯一 ID。 |
| [SetLabel](./Methods/SetLabel.md) | boolean | 设置当前容器的标签属性。 |
| [SetLock](./Methods/SetLock.md) | boolean | 设置当前块级文本内容控件的锁定：**「unlocked」** - 内容可编辑且容器可删除。**「contentLocked」** - 内容不可编辑。**「sdtContentLocked」** - 内容不可编辑且容器不可删除。**「sdtLocked」** - 容器不可删除。 |
| [SetPicture](./Methods/SetPicture.md) | boolean | 设置图片内容控件的内容（图像）。此方法通过从提供的 URL 设置图像来更新内容控件中的图片。URL 应该是指向图像的互联网链接。 |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | 设置当前内容控件的占位符文本。 |
| [SetTag](./Methods/SetTag.md) | boolean | 设置当前容器的标记属性。 |
| [SetTextPr](./Methods/SetTextPr.md) | boolean | 将文本设置应用于内容控件的内容。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiBlockLvlSdt 对象转换为 JSON 对象。 |
| [UpdateFromXmlMapping](./Methods/UpdateFromXmlMapping.md) | boolean | 使用 XML 映射中的值更新内容控件。 |
