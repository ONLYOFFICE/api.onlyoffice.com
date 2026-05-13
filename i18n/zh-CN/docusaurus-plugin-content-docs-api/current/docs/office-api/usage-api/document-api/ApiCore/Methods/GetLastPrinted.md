# GetLastPrinted

返回文档最后打印的日期。

## 语法

```javascript
expression.GetLastPrinted();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Date

## 示例

获取文档中当前文档的最后打印日期。

```javascript editor-docx
// How can I get last printed using a core properties in a document?

// Get last printed for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastPrinted(new Date());

const lastPrintedDate = core.GetLastPrinted().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);
```
