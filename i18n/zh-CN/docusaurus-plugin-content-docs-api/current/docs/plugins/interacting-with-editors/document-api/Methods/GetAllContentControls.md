# GetAllContentControls

返回已添加到页面的所有内容控件的信息。

## 语法

```javascript
expression.GetAllContentControls();
```

`expression` - 表示 [Api](../document-api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ContentControl](../Enumeration/ContentControl.md)[]

## 示例

```javascript
window.Asc.plugin.init = function () {
    window.Asc.plugin.executeMethod("GetAllContentControls", null, function (controls) {
        for (var i = 0; i < controls.length; i++) {
            if (controls[i].Tag === "{tag}") {
                window.Asc.plugin.executeMethod("SelectContentControl", [controls[i].InternalId]);
                break;
            }
        }
    });
};
```
