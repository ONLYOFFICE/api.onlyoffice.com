# IsToggleToOff

检查字段是否可切换为关闭。

## 语法

```javascript
expression.IsToggleToOff();
```

`expression` - 表示 [ApiRadiobuttonField](../ApiRadiobuttonField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

This example gets toggle to off property of checkbox field.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let checkboxField = Api.CreateCheckboxField([10, 10, 25, 25]);
page.AddObject(checkboxField);

checkboxField.SetToggleToOff(false);
console.log('Toggle to off is: ' + checkboxField.IsToggleToOff());
```
