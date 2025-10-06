# 获取 VBA 宏

返回文档中的所有 VBA 宏。

## 语法

```javascript
expression.GetVBAMacros();
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

此方法无参数。

## 返回值

string（字符串） \| null

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetVBAMacros", null, function (data) {
    if (data && typeof data === 'string' && data.includes ('<Module')) {
        var arr = data.split ('<Module ').filter (function (el) {return el.includes ('Type="Procedural"')});
        arr.forEach (function (el) {
            var start = el.indexOf ('<SourceCode>') + 12;
            var end = el.indexOf ('</SourceCode>', start);
            var macros = el.slice (start, end);

            start = el.indexOf ('Name="') + 6;
            end = el.indexOf ('"', start);
            var name = el.slice (start, end);
            var index = Content.macrosArray.findIndex (function (macr) {return macr.name == name});
            if (index == -1) {
                macros = macros.replace (/&amp;/g,'&');
                macros = macros.replace (/&lt;/g,'<');
                macros = macros.replace (/&gt;/g,'>');
                macros = macros.replace (/&apos;/g,'\'');
                macros = macros.replace (/&quot;/g,'"');
                macros = macros.replace (/Attribute [\w \.="\\]*/g,'');
                Content.macrosArray.push (
                    {
                        name: name,
                        value: '(function ()\n{\n\t\n})();\n\n',
                        guid: create_guid ()
                    }
                );
            }
        });
    }
    updateMenu ();
    window.CustomContextMenu.init ();
    if (Content.current === -1)
    {
        let event = new Event ("click");
        document.getElementById ("button_new").dispatchEvent (event);
    }
});
```
