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

在文档中转到书签并选中。

```javascript editor-docx
// Get a bookmark by its name and then jump to it in a document.

// Select a bookmark from the documnet by going to it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.GoTo();
```
