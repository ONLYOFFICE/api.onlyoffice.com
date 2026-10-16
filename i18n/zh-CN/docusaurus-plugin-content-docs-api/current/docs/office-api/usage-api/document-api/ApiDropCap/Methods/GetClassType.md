# GetClassType

返回 ApiDropCap 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiDropCap](../ApiDropCap.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"dropCap"

## 示例

获取文档中首字下沉对象的类类型。

```javascript editor-docx
// Determine the class type of a drop cap object in a document.

// Read the "dropCap" class type from a drop cap created for a paragraph in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
const classType = dropCap.GetClassType();
const result = Api.CreateParagraph();
result.AddText('The ApiDropCap class type: ' + classType);
doc.Push(result);
```
