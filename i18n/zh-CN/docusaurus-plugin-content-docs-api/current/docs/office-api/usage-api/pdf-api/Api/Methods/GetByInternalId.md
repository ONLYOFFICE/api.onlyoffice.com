# GetByInternalId

通过内部 ID 返回对象。

## 语法

```javascript
expression.GetByInternalId(id);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| id | 必需 | string |  | 对象内部 ID。 |

## 返回值

[FloatObject](../../Enumeration/FloatObject.md) \| [ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| [ApiTableRow](../../ApiTableRow/ApiTableRow.md) \| [ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## 示例

在 PDF 中按内部 ID 获取对象。

```javascript editor-pdf
// Useful for finding a PDF API object by its internal identifier.

// Create a field, get its internal ID, and retrieve the same field by that ID.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let internalId = textField.GetInternalId();
let fieldById = Api.GetByInternalId(internalId);
fieldById.SetValue("Field was found by internal ID");
```
