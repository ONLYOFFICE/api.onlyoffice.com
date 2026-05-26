# MoveCursorToEnd

将光标移动到段落末尾。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.MoveCursorToEnd();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

将光标移动到文档中段落的末尾。

```javascript editor-docx
// How do I position the cursor after the last character of a paragraph in a document?

// Ensure further typed input appears at the tail of a paragraph by repositioning the cursor in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Place cursor at the end of this paragraph.");
paragraph.MoveCursorToEnd();
```
