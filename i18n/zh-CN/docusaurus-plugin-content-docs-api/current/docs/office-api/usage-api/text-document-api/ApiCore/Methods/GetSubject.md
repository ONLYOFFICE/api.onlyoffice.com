# GetSubject

返回文档主题。

## 语法

```javascript
expression.GetSubject();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取文档中当前文档的主题。

```javascript editor-docx
// How to get the subject for a core properties in a document?

// Get the subject and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetSubject("ApiCore Method Showcase");

const subject = core.GetSubject();
let paragraph = doc.GetElement(0);
paragraph.AddText("Subject: " + subject);
```
