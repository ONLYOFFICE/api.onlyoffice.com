# GetFileHTML

以 HTML 格式返回文件内容。

## 语法

```javascript
expression.GetFileHTML();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetFileHTML", null, function (res) {
    console.log (res)
});
```
