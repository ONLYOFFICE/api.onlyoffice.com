# 获取版本

返回编辑器的版本信息。

## 语法

```javascript
expression.GetVersion();
```

`expression` — 表示一个 [Api](Methods.md) 类的变量。

## 参数

此方法无参数。

## 返回值

string（字符串）

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetVersion", [], function (version) {
    if (version === undefined) {
        window.Asc.plugin.executeMethod ("PasteText", [ifr.contentDocument.getElementById ("google_translate_element").outerText], function (result) {
            paste_done = true;
        });
    }
    else {
        window.Asc.plugin.executeMethod ("GetSelectionType", [], function (type) {
            switch (type) {
                case "none":
                case "drawing":
                    window.Asc.plugin.executeMethod("PasteText", [ifr.contentDocument.getElementById ("google_translate_element").outerText], function (result) {
                        paste_done = true;
                    });
                    break;
                case "text":
                    window.Asc.plugin.callCommand (function () {
                        Api.ReplaceTextSmart (Asc.scope.arr);
                    }, undefined, undefined, function (result) {
                        paste_done = true;
                    });
                    break;
            }
        });
    }
});
```
