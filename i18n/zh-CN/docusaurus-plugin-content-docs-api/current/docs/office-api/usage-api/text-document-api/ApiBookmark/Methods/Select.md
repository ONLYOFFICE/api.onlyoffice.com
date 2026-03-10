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

此示例展示如何转到书签并选择它。

```javascript editor-docx
// Select a bookmark.

// Select a bookmark from the documnet by getting it by its name.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.Select();

```
