# GetClassType

返回 ApiCheckboxField 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCheckboxField](../ApiCheckboxField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"checkboxField"

## 示例

此示例获取复选框字段对象的类类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

console.log('Field type is: ' + checkboxField.GetClassType());
```
