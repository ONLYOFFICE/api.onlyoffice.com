# 获取所有内容控件

返回页面上所有已添加的内容控件的信息。

## 语法

```javascript
expression.GetAllContentControls();
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

此方法没有参数。

## 返回值

[内容控件](../Enumeration/ContentControl.md)[]

## 示例

```javascript
var flagInit = false;
window.Asc.plugin.init = function (text) {
    if (!flagInit) {
        this.executeMethod ("GetAllContentControls", null, function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].Tag == 11) {
                    this.Asc.plugin.executeMethod ("SelectContentControl", [data[i].InternalId]);
                    break;
                }
            }
        });
        flagInit = true;
        ...
    }
};
```
