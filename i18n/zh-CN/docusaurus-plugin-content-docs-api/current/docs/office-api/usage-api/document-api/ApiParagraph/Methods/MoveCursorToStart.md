# MoveCursorToStart

将光标移动到段落开头。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.MoveCursorToStart();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

将光标移动到文档中段落的开头。

```javascript editor-docx
// How do I place the cursor at the start of a paragraph in a document?

// Position the insertion point before all text to begin editing from the top in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Place cursor here → then at the beginning.");
paragraph.MoveCursorToStart();
```
