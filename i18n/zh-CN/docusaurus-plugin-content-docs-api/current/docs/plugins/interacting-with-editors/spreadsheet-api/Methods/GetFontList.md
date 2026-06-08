# GetFontList

返回字体列表。

## 语法

```javascript
expression.GetFontList();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FontInfo](../Enumeration/FontInfo.md)[]

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetFontList", null, function (res) {
    console.log (res)
});
```
