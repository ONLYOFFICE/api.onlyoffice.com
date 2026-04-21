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

获取文档中自定义属性的类类型。

```javascript editor-docx
// How to identify the class type of a custom properties in a document?

// Obtain the class type identifier of a custom properties object in a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

const classType = customProps.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);
```
