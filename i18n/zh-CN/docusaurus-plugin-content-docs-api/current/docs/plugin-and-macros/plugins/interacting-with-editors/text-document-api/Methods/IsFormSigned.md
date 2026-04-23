# IsFormSigned

检查指定的表单是否已进行数字签名。

## 语法

```javascript
expression.IsFormSigned();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

```javascript
window.Asc.plugin.executeMethod ("IsFormSigned", [], function(isSigned) {
    console.log ("Form is signed: " + isSigned);
});
```
