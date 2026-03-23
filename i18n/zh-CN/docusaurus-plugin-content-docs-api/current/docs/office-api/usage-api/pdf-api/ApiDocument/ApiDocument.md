# ApiDocument

表示 ApiDocument 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddPage](./Methods/AddPage.md) | [ApiPage](../ApiPage/ApiPage.md) | 向文档添加新页面。 |
| [ApplyRedact](./Methods/ApplyRedact.md) | boolean | 应用已添加的涂黑。 |
| [GetAllFields](./Methods/GetAllFields.md) | [ApiField](../Enumeration/ApiField.md) | 获取文档中所有字段的列表。 |
| [GetClassType](./Methods/GetClassType.md) | "document" | 返回 ApiDocument 类的类型。 |
| [GetFieldByName](./Methods/GetFieldByName.md) | [ApiField](../Enumeration/ApiField.md) | 按名称获取字段。 |
| [GetPage](./Methods/GetPage.md) | [ApiPage](../ApiPage/ApiPage.md) | 按索引从文档获取页面。 |
| [GetPagesCount](./Methods/GetPagesCount.md) | number | 获取文档页数 |
| [RemovePage](./Methods/RemovePage.md) | boolean | 按索引从文档移除页面 |
| [SearchAndRedact](./Methods/SearchAndRedact.md) | [ApiRedactAnnotation](../ApiRedactAnnotation/ApiRedactAnnotation.md)[] | 搜索词语并对其添加涂黑。 |
