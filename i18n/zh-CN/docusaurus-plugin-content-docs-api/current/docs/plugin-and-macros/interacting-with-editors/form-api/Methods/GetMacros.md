# 获取宏

返回文档中的宏。

## 语法

```javascript
expression.GetMacros();
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

此方法无参数。

## 返回值

[宏](../Enumeration/Macros.md)

## 示例

```javascript
window.Asc.plugin.executeMethod ("GetMacros", [JSON.stringify(Content)], function(data) {

    try
    {
        Content = JSON.parse (data);

        for (var i = 0; i < Content.macrosArray.length; i++)
        {
            var value = Content.macrosArray[i].name;
            if (undefined === value)
                value = "";

            value = value.replace (/&/g,'&amp;');
            value = value.replace (/</g,'&lt;');
            value = value.replace (/>/g,'&gt;');
            value = value.replace (/'/g,'&apos;');
            value = value.replace (/"/g,'&quot;');

            Content.macrosArray[i].name = value;
        }
    }
    catch (err)
    {
        Content = {
            macrosArray : [],
            current : -1
        };
    }
});
```
