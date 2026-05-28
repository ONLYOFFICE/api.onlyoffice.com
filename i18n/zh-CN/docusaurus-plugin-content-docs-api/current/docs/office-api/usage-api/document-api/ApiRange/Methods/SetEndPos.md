# SetEndPos

设置当前范围对象的结束位置。

## 语法

```javascript
expression.SetEndPos(nPos);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | Number |  | 结束位置。 |

## 返回值

boolean

## 示例

通过设置文档中的最后一个字符位置来调整文本范围的结束位置。

```javascript editor-docx
// How do I change the ending boundary of a selected text range in a document?

// Shorten or extend a range by moving its closing edge to a new position in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
range.SetEndPos(12);
range.SetBold(true);
```
