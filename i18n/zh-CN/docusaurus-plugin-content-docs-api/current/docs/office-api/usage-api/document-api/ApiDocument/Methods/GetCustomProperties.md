# GetCustomProperties

从文档检索自定义属性。

## 语法

```javascript
expression.GetCustomProperties();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCustomProperties](../../ApiCustomProperties/ApiCustomProperties.md)

## 示例

在文档中添加和读取各种类型的自定义元数据属性。

```javascript editor-docx
// How do I store and retrieve custom string, number, date, and boolean properties in a document?

// Attach structured metadata to a document so it can be read back programmatically in a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

customProps.Add("MyStringProperty", "Hello, World!");
customProps.Add("MyNumberProperty", 42);
customProps.Add("MyDateProperty", new Date("23 November 2023"));
customProps.Add("MyBoolProperty", true);

const stringValue = customProps.Get("MyStringProperty");
const numberValue = customProps.Get("MyNumberProperty");
const dateValue = customProps.Get("MyDateProperty");
const boolValue = customProps.Get("MyBoolProperty");

let paragraph = doc.GetElement(0);
paragraph.AddText("Custom String Property: " + stringValue);
paragraph.AddText("\nCustom Number Property: " + numberValue);
paragraph.AddText("\nCustom Date Property: " + dateValue.toDateString());
paragraph.AddText("\nCustom Boolean Property: " + boolValue);
```
