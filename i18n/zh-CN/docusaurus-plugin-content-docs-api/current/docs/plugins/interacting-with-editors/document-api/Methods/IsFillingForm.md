# IsFillingForm

检查文档是否处于表单填写模式。

## 语法

```javascript
expression.IsFillingForm();
```

`expression` - 表示 [Api](../document-api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

```javascript
Asc.plugin.executeMethod('IsFillingForm', [], result => console.log('Is filling form mode: ' + result));
```
