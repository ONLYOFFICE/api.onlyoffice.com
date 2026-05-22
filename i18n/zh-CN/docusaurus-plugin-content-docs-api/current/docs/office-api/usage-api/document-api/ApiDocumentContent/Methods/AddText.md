# AddText

将指定文本追加到文档内容的末尾。

## 语法

```javascript
expression.AddText(text);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要添加的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

```javascript editor-docx
// How do I add text to the last paragraph of a document content object in a document?

// Add a sentence to the end of a content control without replacing existing text in a document.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("First sentence.");
content.AddText(" Appended sentence.");
```
