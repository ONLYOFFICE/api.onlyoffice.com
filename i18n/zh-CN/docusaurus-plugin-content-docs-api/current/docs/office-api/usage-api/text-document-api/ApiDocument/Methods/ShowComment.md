# ShowComment

通过 ID 显示批注。

## 语法

```javascript
expression.ShowComment(commentId);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| commentId | 必需 | string \| Array.string |  | 批注 ID。 |

## 返回值

boolean

## 示例

通过 ID 在文档中显示批注。

```javascript editor-docx
// How can I show comment using a document in a document?

// Show comment for a document in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This text has a comment attached to it.');

const range = paragraph.GetRange();
const comment = range.AddComment('Please review this section.', 'John');

if (comment) {
	doc.ShowComment(comment.GetId());
	const resultParagraph = Api.CreateParagraph();
	const author = comment.GetAuthorName();
	resultParagraph.AddText('Comment by ' + author + ' is now displayed.');
	doc.Push(resultParagraph);
}
```
