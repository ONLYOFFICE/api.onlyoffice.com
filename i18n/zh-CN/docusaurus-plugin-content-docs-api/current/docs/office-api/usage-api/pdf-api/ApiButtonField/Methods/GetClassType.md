# GetClassType

返回 ApiButtonField 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiButtonField](../ApiButtonField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"buttonField"

## 示例

此示例获取按钮字段对象的类类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

console.log('Widget type is: ' + buttonField.GetClassType());
```
