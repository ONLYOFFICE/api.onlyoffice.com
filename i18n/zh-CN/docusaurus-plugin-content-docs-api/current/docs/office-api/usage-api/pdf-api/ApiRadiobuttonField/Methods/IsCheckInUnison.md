# IsCheckInUnison

检查字段是否统一选中。

## 语法

```javascript
expression.IsCheckInUnison();
```

`expression` - 表示 [ApiRadiobuttonField](../ApiRadiobuttonField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

This example gets radiobutton field check in unison property.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

radiobuttonField.AddOption(0, [10, 30, 25, 45], 'Choice1');
radiobuttonField.AddOption(0, [10, 50, 25, 65], 'Choice2');
radiobuttonField.AddOption(0, [10, 70, 25, 85], 'Choice3');
radiobuttonField.SetCheckInUnison(true);
radiobuttonField.SetValue('Choice1');
console.log('Check in unison is: ' + radiobuttonField.IsCheckInUnison());
```
