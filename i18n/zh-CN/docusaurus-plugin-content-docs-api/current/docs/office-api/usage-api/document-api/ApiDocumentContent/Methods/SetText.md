# SetText

用指定文本替换当前文档内容对象的所有内容，
保留第一个段落的格式。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 要设置的文本。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

```javascript editor-docx
// How do I overwrite everything inside a document content object in a document?

// Clear a content control and fill it with a single sentence, preserving the original formatting in a document.

const doc = Api.GetDocument();
const blockLvlSdt = Api.CreateBlockLvlSdt();
doc.Push(blockLvlSdt);

const content = blockLvlSdt.GetContent();
content.GetElement(0).AddText("Original text inside the content control.");
content.SetText("Replaced text inside the content control.");

const para = Api.CreateParagraph();
para.AddText("Content after SetText: " + content.GetText());
doc.Push(para);
```
