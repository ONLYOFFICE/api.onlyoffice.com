# IsEditingOFormMode

检查文档是否处于 OForm 编辑模式。

## 语法

```javascript
expression.IsEditingOFormMode();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

```javascript
Asc.plugin.executeMethod('IsEditingOFormMode', [], result => console.log('Is editing OForm mode: ' + result));
```
