# GetClassType

返回 ApiCustomProperties 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCustomProperties](../ApiCustomProperties.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"customProperties"

## 示例

获取文档中自定义属性对象的类类型。

```javascript editor-docx
// How do I identify the type of a custom properties object at runtime in a document?

// Confirm the object type before calling type-specific methods on custom properties in a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

const classType = customProps.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);
```
