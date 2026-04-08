# GetClassType

返回 ApiTextField 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTextField](../ApiTextField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"textField"

## 示例

此示例获取文本字段并显示其类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue(textField.GetClassType());

```
