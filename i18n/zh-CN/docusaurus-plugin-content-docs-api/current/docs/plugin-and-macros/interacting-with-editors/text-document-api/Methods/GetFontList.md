# 获取字体列表

返回字体列表。

## 语法

```javascript
expression.GetFontList();
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

此方法无参数。

## 返回值

[字体信息](../Enumeration/FontInfo.md)[]

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetFontList", null, function (res) {
    console.log (res)
});
```
