# SetText

设置书签文本。

## 语法

```javascript
expression.SetText(sText);
```

`expression` - 表示 [ApiBookmark](../ApiBookmark.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 书签文本。 |

## 返回值

boolean

## 示例

此示例展示如何设置书签文本。

```javascript editor-docx
// How to set a text to a bookmark.

// Get a bookmark from the document by its name then set its text.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
let oldText = bookmark.GetText();
bookmark.SetText("New bookmark text");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark text changed from: '" + oldText + "' to: '" + bookmark.GetText() + "'");

```
