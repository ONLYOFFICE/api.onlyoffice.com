# GetFieldByName

按名称获取字段。

## 语法

```javascript
expression.GetFieldByName();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiField](../../Enumeration/ApiField.md)

## 示例

此示例按名称获取文档中的字段。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetName('Text field 1');
textField = doc.GetFieldByName('Text field 1');
textField.SetValue('Example value');
```
