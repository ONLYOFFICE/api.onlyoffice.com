# GetCustomFunctions

返回本地自定义函数库。

## 语法

```javascript
expression.GetCustomFunctions();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetCustomFunctions", null, function (res) {
    console.log ("First custom function: " + res[0])
});
```
