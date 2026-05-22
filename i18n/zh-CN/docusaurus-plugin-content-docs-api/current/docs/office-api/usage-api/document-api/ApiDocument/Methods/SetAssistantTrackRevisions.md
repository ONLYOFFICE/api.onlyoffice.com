# SetAssistantTrackRevisions

在文档中启用或禁用 AI 辅助修订跟踪。

## 语法

```javascript
expression.SetAssistantTrackRevisions(isTrack, assistantName);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isTrack | 必需 | boolean |  | 指定修订跟踪模式是否已设置。 |
| assistantName | 必需 | string |  | AI 助手名称。 |

## 返回值

boolean

## 示例

在文档中启用带有作者名称的 AI 辅助修订跟踪。

```javascript editor-docx
// How do I track changes made by an AI assistant in a document?

// Assign a named author to AI-generated edits so reviewers can identify them separately.

const doc = Api.GetDocument();

const paragraph = doc.GetElement(0);
paragraph.AddText('Original document text.');

doc.SetAssistantTrackRevisions(true, 'AI Assistant');

const assistantParagraph = Api.CreateParagraph();
assistantParagraph.AddText('Text added by AI assistant.');
doc.Push(assistantParagraph);

doc.SetAssistantTrackRevisions(false);

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('AI-assisted tracking has been enabled and then disabled.');
doc.Push(resultParagraph);
```
