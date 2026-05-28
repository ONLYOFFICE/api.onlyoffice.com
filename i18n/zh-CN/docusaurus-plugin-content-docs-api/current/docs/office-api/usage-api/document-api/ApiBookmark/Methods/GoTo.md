# GoTo

将光标移动到当前书签。

## 语法

```javascript
expression.GoTo();
```

`expression` - 表示 [ApiBookmark](../ApiBookmark.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

将光标跳转到文档中命名书签的位置。

```javascript editor-docx
// How do I navigate directly to a bookmark by name in a document?

// Move focus to a specific marked position so the reader lands at the right spot in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.GoTo();
```
