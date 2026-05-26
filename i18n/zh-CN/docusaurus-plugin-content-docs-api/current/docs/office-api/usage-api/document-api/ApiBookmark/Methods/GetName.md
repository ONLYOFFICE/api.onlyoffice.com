# GetName

返回书签名称。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiBookmark](../ApiBookmark.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中现有书签的名称。

```javascript editor-docx
// How do I retrieve the name of a bookmark added to a text range in a document?

// Insert a bookmark and display its name as text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark with name: " + bookmark.GetName());
```
