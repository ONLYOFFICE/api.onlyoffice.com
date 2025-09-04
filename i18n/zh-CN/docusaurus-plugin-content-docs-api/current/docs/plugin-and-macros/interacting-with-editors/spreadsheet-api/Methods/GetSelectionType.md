# 获取选区类型

返回当前选区的类型。

## 语法

```javascript
expression.GetSelectionType();
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

此方法无参数。

## 返回值

[选区类型](../Enumeration/SelectionType.md)

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetSelectionType", [], function(type) {
    switch (type) {
        case "none":
        case "drawing":
            window.Asc.plugin.executeMethod ("PasteText", [$("#txt_shower")[0].innerText], function (result) {
                paste_done = true;
            });
            break;
        case "text":
            window.Asc.plugin.callCommand (function() {
                Api.ReplaceTextSmart (Asc.scope.arr);
            }, undefined, undefined, function(result) {
                paste_done = true;
            });
            break;
    }
});
```
