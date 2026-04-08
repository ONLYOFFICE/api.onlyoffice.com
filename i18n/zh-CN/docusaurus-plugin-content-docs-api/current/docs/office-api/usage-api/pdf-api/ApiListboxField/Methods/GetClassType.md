# GetClassType

返回 ApiListboxField 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiListboxField](../ApiListboxField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"listboxField"

## 示例

此示例获取字段类型并显示。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let listboxField = Api.CreateListboxField([10, 10, 160, 100]);
page.AddObject(listboxField);

listboxField.AddOption('Field type is: ' + listboxField.GetClassType());
listboxField.SetValueIndexes([0]);
```
