# 智能替换文本

将选定区域中的每个段落（或单元格中的文本）替换为字符串数组中的对应文本。

## 语法

```javascript
expression.ReplaceTextSmart(arrString, sParaTab, sParaNewLine);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrString | 必填 | string[] |  | 替换文本的字符串数组。 |
| sParaTab | 选填 | string | "\t" | 用于指定源文本中制表符的字符。可以使用任意符号。默认分隔符为 "\t"。 |
| sParaNewLine | 选填 | string | "\r\n" | 用于指定源文本中换行符的字符。可以使用任意符号。默认分隔符为 "\r\n"。 |

## 返回值

boolean（布尔值）

## 示例

```javascript
window.Asc.plugin.executeMethod ("ReplaceTextSmart", [Asc.scope.arr, String.fromCharCode(9), String.fromCharCode(13)], function (isDone) {
    if (!isDone)
        window.Asc.plugin.callCommand (function () {
            Api.ReplaceTextSmart (Asc.scope.arr);
        });
});
```
