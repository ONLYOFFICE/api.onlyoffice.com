# SetTrackRevisions

设置修订跟踪模式。

## 语法

```javascript
expression.SetTrackRevisions(isTrack);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isTrack | 必需 | boolean |  | 指定是否设置修订跟踪模式。 |

## 返回值

boolean

## 示例

此示例设置修订跟踪模式。

```javascript editor-docx
// How to track revisions of the document.

// Start document tracking mode.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
paragraph.AddText("Track revisions mode was set.");
```
