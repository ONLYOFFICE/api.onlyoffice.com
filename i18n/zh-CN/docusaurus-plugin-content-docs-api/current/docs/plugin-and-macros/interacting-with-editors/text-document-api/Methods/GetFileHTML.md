# 获取 HTML 格式的文件内容

以 HTML 格式返回文件内容。

## 语法

```javascript
expression.GetFileHTML();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有参数。

## 返回值

string（字符串）

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetFileHTML", null, function (res) {
    console.log (res)
});
```
