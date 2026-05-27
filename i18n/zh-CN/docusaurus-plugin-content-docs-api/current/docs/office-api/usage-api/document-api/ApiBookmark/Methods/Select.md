# Select

选择当前书签。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiBookmark](../ApiBookmark.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

以编程方式选择文档中命名书签的文本范围。

```javascript editor-docx
// How do I highlight a bookmark's content as a selection in a document?

// Bring a bookmark's text into focus so it is ready for editing or formatting in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.Select();
```
