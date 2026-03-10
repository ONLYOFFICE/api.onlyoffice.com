# IsReadOnly

检查字段是否为只读

## 语法

```javascript
expression.IsReadOnly();
```

`expression` - 表示 [ApiBaseField](../ApiBaseField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

This example gets field read only and display's it.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Read only is: ' + textField.IsReadOnly());
```
