# IsTrackRevisions

检查是否启用了修订跟踪模式。

## 语法

```javascript
expression.IsTrackRevisions();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例检查修订跟踪模式是否已启用。

```javascript editor-docx
// How to track revisions of the document.

// Get a boolean value that shows whether revision tracking is enabled or not.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
let trackRevisions = doc.IsTrackRevisions();
paragraph.AddText("Change tracking is enabled: " + trackRevisions);
```
