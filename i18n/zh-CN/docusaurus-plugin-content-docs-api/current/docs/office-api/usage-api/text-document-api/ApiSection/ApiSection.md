# ApiSection

表示 ApiSection 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "section" | 返回 ApiSection 类的类型。 |
| [GetColumnsCount](./Methods/GetColumnsCount.md) | number | 返回此节中的列数。 |
| [GetColumnsSpaces](./Methods/GetColumnsSpaces.md) | [twips](../Enumeration/twips.md)[] | 返回列之间的距离值数组，以点的二十分之一为单位（1/1440 英寸）。 |
| [GetColumnsWidths](./Methods/GetColumnsWidths.md) | [twips](../Enumeration/twips.md)[] | 返回列宽值数组，以点的二十分之一为单位（1/1440 英寸）。 |
| [GetFooter](./Methods/GetFooter.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回指定页脚类型的内容。 |
| [GetFooterDistance](./Methods/GetFooterDistance.md) | [twips](../Enumeration/twips.md) | 返回从页面底边到页脚底边的距离。 |
| [GetHeader](./Methods/GetHeader.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回指定页眉类型的内容。 |
| [GetHeaderDistance](./Methods/GetHeaderDistance.md) | [twips](../Enumeration/twips.md) | 返回从页面顶边到页眉顶边的距离。 |
| [GetNext](./Methods/GetNext.md) | [ApiSection](../ApiSection/ApiSection.md) \| null | 返回下一节（如果存在）。 |
| [GetPageHeight](./Methods/GetPageHeight.md) | [twips](../Enumeration/twips.md) | 获取当前节的页面高度。 |
| [GetPageMarginBottom](./Methods/GetPageMarginBottom.md) | [twips](../Enumeration/twips.md) | 返回当前节中所有页面的下边距。 |
| [GetPageMarginLeft](./Methods/GetPageMarginLeft.md) | [twips](../Enumeration/twips.md) | 返回当前节中所有页面的左边距。 |
| [GetPageMarginRight](./Methods/GetPageMarginRight.md) | [twips](../Enumeration/twips.md) | 返回当前节中所有页面的右边距。 |
| [GetPageMarginTop](./Methods/GetPageMarginTop.md) | [twips](../Enumeration/twips.md) | 返回当前节中所有页面的上边距。 |
| [GetPageWidth](./Methods/GetPageWidth.md) | [twips](../Enumeration/twips.md) | 获取当前节的页面宽度。 |
| [GetPrevious](./Methods/GetPrevious.md) | [ApiSection](../ApiSection/ApiSection.md) \| null | 返回上一节（如果存在）。 |
| [GetStartPageNumber](./Methods/GetStartPageNumber.md) | number | 返回指定节的起始页码。 |
| [GetType](./Methods/GetType.md) | [SectionBreakType](../Enumeration/SectionBreakType.md) | 返回节分隔符类型。 |
| [RemoveFooter](./Methods/RemoveFooter.md) | boolean | 从当前节中删除指定类型的页脚。删除后，页脚将从上一节继承，或者如果这是文档中的第一节，则不会显示指定类型的页脚。 |
| [RemoveHeader](./Methods/RemoveHeader.md) | boolean | 从当前节中删除指定类型的页眉。删除后，页眉将从上一节继承，或者如果这是文档中的第一节，则不会显示指定类型的页眉。 |
| [SetEqualColumns](./Methods/SetEqualColumns.md) | boolean | 指定当前节中的所有文本列宽度相等。 |
| [SetFooterDistance](./Methods/SetFooterDistance.md) | boolean | 指定从页面底边到页脚底边的距离。 |
| [SetHeaderDistance](./Methods/SetHeaderDistance.md) | boolean | 指定从页面顶边到页眉顶边的距离。 |
| [SetNotEqualColumns](./Methods/SetNotEqualColumns.md) | boolean | 指定当前节中的所有列具有不同的宽度。列数等于 aWidth 数组的长度。aSpaces 数组的长度必须等于 (aWidth.length - 1)。 |
| [SetPageMargins](./Methods/SetPageMargins.md) | boolean | 指定此节中所有页面的页边距。 |
| [SetPageSize](./Methods/SetPageSize.md) | boolean | 指定当前节中所有页面的属性（大小和方向）。 |
| [SetStartPageNumber](./Methods/SetStartPageNumber.md) | boolean | 设置指定节的起始页码。 |
| [SetTitlePage](./Methods/SetTitlePage.md) | boolean | 指定此文档中当前节的第一页是否具有不同的页眉和页脚。 |
| [SetType](./Methods/SetType.md) | boolean | 指定当前节的类型。节类型定义当前节的内容相对于上一节的放置方式。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiSection 对象转换为 JSON 对象。 |
