# GetClassType

返回 ApiCore 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCore](../ApiCore.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"core"

## 示例

读取文档中核心属性对象的类类型。

```javascript editor-docx
// How do I find out what class type the core properties object belongs to in a document?

// Confirm the object identity before calling type-specific methods in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
const classType = core.GetClassType();

let paragraph = doc.GetElement(0);
paragraph.AddText("Class type: " + classType);
```
