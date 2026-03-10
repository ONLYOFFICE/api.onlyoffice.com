# GetClassType

返回 ApiPage 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"page"

## 示例

This example gets page object class type and displays it in text field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(page.GetClassType());
```
