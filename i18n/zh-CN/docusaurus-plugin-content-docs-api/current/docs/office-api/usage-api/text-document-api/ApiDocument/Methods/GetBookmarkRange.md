# GetBookmarkRange

返回书签范围。

## 语法

```javascript
expression.GetBookmarkRange(sName);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 书签名称。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例展示如何获取书签范围。

```javascript editor-docx
// Get a range with a bookmark with specific name.

// How to retrieve a range bookmarked and set it bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddBookmark("Bookmark");
range = doc.GetBookmarkRange("Bookmark");
range.SetBold(true);
```
