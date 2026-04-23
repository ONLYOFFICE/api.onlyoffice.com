# Delete

删除当前范围中的所有内容。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例删除范围中的所有内容。

```javascript editor-docx
// How to clear the content of the range.

// Delete the text from the content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE delete text Document Builder");
let range = doc.GetRange(10, 21);
range.Delete();
```
