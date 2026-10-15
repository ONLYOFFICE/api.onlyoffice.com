# Stop

停止遍历。当前钩子函数返回后不再调用其他钩子函数。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.Stop();
```

`expression` - 表示 [ApiDocumentVisitor](../ApiDocumentVisitor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

找到第一个提及某个词的段落并在此停止文档访问者。

```javascript editor-docx
// How do I stop walking a document as soon as the first match is found?

// Add three paragraphs, stop at the first one containing the search word, make it bold and report how many paragraphs were visited.

const doc = Api.GetDocument();
const agenda = doc.GetElement(0);
agenda.AddText("Agenda for the quarterly meeting");
const overview = Api.CreateParagraph();
overview.AddText("Budget overview for the next quarter");
doc.Push(overview);
const summary = Api.CreateParagraph();
summary.AddText("Budget summary and open questions");
doc.Push(summary);

let found = null;
let visited = 0;
const visitor = doc.GetDocumentVisitor();
visitor.Paragraph = function (paragraph) {
	visited += 1;
	if (paragraph.GetText().indexOf("Budget") !== -1) {
		found = paragraph;
		visitor.Stop();
	}
	return true;
};
visitor.Traverse(false);

found.SetBold(true);
const result = Api.CreateParagraph();
result.AddText("Paragraphs visited before stopping: " + visited);
doc.Push(result);
```
