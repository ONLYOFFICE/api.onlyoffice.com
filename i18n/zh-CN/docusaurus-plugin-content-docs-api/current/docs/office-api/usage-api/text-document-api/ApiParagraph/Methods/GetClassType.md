# GetClassType

返回 ApiParagraph 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"paragraph"

## 示例

此示例获取类类型并将其插入到文档中。

```javascript editor-docx
// How to get the class type of the ApiParagraph.

// Get the class type of the paragraph object.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let classType = paragraph.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
