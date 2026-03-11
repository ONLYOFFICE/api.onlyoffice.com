# ReplaceTextSmart

用字符串数组中的相应文本替换选定内容中的每个段落（或单元格中的文本）。

## 语法

```javascript
expression.ReplaceTextSmart(arrString, sParaTab, sParaNewLine);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrString | 必需 | string[] |  | 替换字符串数组。 |
| sParaTab | 可选 | string | "\t" | 用于指定源文本中制表符的字符。可以使用任何符号。默认分隔符为 "\t"。 |
| sParaNewLine | 可选 | string | "\r\n" | 用于指定源文本中换行符的字符。可以使用任何符号。默认分隔符为 "\r\n"。 |

## 返回值

boolean

## 示例

```javascript
window.Asc.plugin.executeMethod ("ReplaceTextSmart", [Asc.scope.arr, String.fromCharCode(9), String.fromCharCode(13)], function (isDone) {
    if (!isDone)
        window.Asc.plugin.callCommand (function () {
            Api.ReplaceTextSmart (Asc.scope.arr);
        });
});
```
