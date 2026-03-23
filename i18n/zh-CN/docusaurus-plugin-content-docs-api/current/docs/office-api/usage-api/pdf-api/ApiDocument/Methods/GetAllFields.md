# GetAllFields

获取文档中所有字段的列表。

## 语法

```javascript
expression.GetAllFields();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiField](../../Enumeration/ApiField.md)

## 示例

此示例获取文档中的所有字段。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 30]);
let comboboxField = Api.CreateComboboxField([10, 40, 160, 60]);
let listboxField = Api.CreateListboxField([10, 70, 100, 130]);

page.AddObject(textField);
page.AddObject(comboboxField);
page.AddObject(listboxField);

let allFields = doc.GetAllFields();
allFields.forEach(function(field) {
    console.log(field.GetClassType());
});
```
