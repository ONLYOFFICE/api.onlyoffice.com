# GetClassType

返回 ApiRadiobuttonField 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRadiobuttonField](../ApiRadiobuttonField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"radiobuttonField"

## 示例

This example gets radiobutton field object class type.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

console.log('Field type is: ' + radiobuttonField.GetClassType());
```
