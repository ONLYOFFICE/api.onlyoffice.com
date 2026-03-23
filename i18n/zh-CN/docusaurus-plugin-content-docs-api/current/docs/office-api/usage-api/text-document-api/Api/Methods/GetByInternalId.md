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

object

## 示例

此示例展示如何通过内部 ID 获取对象。

```javascript editor-docx
const doc = Api.GetDocument();

const paragraph = doc.GetElement(0);
paragraph.AddText('Original paragraph text.');
const internalId = paragraph.GetInternalId();

const found = Api.GetByInternalId(internalId);

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('Found object class type: ' + found.GetClassType());
resultParagraph.AddLineBreak();
resultParagraph.AddText('Found paragraph text: ' + found.GetText());
doc.Push(resultParagraph);

```
