# 获取所有表单

返回文档中已添加的所有表单的信息。

## 语法

```javascript
expression.GetAllForms();
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

此方法无参数。

## 返回值

[内容控件](../Enumeration/ContentControl.md)[]

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetAllForms", null, function (data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].Tag == 11) {
            this.Asc.plugin.executeMethod ("SelectContentControl", [data[i].InternalId]);
            break;
        }
    }
});
```
