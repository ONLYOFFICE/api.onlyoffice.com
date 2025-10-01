# 获取字段

以文本形式返回所有字段。

## 语法

```javascript
expression.GetFields();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有参数。

## 返回值

string[]

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetFields", null, function (res) {
    console.log ("First field: " + res[0])
});
```
