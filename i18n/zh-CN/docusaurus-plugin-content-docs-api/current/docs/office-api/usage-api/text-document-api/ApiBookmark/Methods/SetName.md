# SetName

更改书签名称。

## 语法

```javascript
expression.SetName(sNewName);
```

`expression` - 表示 [ApiBookmark](../ApiBookmark.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sNewName | 必需 | string |  | 新的书签名称。 |

## 返回值

boolean

## 示例

此示例展示如何设置书签名称。

```javascript editor-docx
// How to rename a bookmark.

// Get a bookmark from the document by its name then set a new name to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark_A");
let bookmark = doc.GetBookmark("Bookmark_A");
let oldName = bookmark.GetName();
bookmark.SetName("Bookmark_B");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark name changed from: '" + oldName + "' to: '" + bookmark.GetName() + "'");

```
