# ApiDocument

表示文档的类。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddPage](./Methods/AddPage.md) | [ApiPage](../ApiPage/ApiPage.md) | 向文档添加新页面。 |
| [ApplyRedact](./Methods/ApplyRedact.md) | boolean | 应用已添加的涂黑。 |
| [GetAllFields](./Methods/GetAllFields.md) | [ApiField](../Enumeration/ApiField.md)[] | 获取文档中所有字段的列表。 |
| [GetCalculateOrder](./Methods/GetCalculateOrder.md) | string[] | 获取文档字段计算顺序 |
| [GetClassType](./Methods/GetClassType.md) | "document" | 返回 ApiDocument 类的类型。 |
| [GetFieldByName](./Methods/GetFieldByName.md) | [ApiField](../Enumeration/ApiField.md) \| null \| undefined | 按名称获取字段。 |
| [GetPage](./Methods/GetPage.md) | [ApiPage](../ApiPage/ApiPage.md) | 按索引从文档获取页面。 |
| [GetPagesCount](./Methods/GetPagesCount.md) | number | 获取文档页数 |
| [GetSelectedText](./Methods/GetSelectedText.md) | string | 获取文档中的所选文本 |
| [GetSelection](./Methods/GetSelection.md) | [DocSelection](../Enumeration/DocSelection.md) \| null \| undefined | 获取文档选区信息 |
| [GetSelectionQuads](./Methods/GetSelectionQuads.md) | [DocQuads](../Enumeration/DocQuads.md) | 按页面获取文档选区四边形 |
| [GetStyle](./Methods/GetStyle.md) | ApiStyle \| null | 按名称返回文档样式。 |
| [Merge](./Methods/Merge.md) | boolean | 将 PDF 文件合并到当前文档的指定位置。 |
| [RemovePage](./Methods/RemovePage.md) | boolean | 按索引从文档中删除页面。 |
| [SearchAndRedact](./Methods/SearchAndRedact.md) | [ApiRedactAnnotation](../ApiRedactAnnotation/ApiRedactAnnotation.md)[] | 搜索词语并对其添加涂黑。 |
| [SetCalculateOrder](./Methods/SetCalculateOrder.md) | boolean | 设置文档字段计算顺序 |
| [SetSelection](./Methods/SetSelection.md) | boolean | 设置文档选区 |
| [Split](./Methods/Split.md) | [PdfFile](../PdfFile/PdfFile.md) | 按指定页面拆分当前 PDF 文件。 |
