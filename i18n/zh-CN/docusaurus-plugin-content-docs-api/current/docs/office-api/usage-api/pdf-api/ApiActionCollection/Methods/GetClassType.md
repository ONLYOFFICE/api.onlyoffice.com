# GetClassType

获取此对象的类类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiActionCollection](../ApiActionCollection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"actionCollection"

## 示例

此示例获取操作集合的类类型。

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateButtonField([10, 10, 100, 30]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
let actions = widgets[0].GetActions();

console.log('Actions class type: ' + actions.GetClassType());
```
