# 获取选中文本

返回文档中选中的文本。

## 语法

```javascript
expression.GetSelectedText(prop);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **说明** |
| -------- | ------------- | ------------ | ---------- | -------- |
| prop | 必填 | object |  | 结果字符串的显示属性。 |
| prop.Numbering | 必填 | boolean |  | 指定结果字符串是否包含编号。 |
| prop.Math | 必填 | boolean |  | 指定结果字符串是否包含数学表达式。 |
| prop.TableCellSeparator | 选填 | string | '\t' | 指定结果字符串中表格单元格分隔符的表示方式。可以使用任意符号，默认分隔符为 "\t"。 |
| prop.TableRowSeparator | 选填 | string | '\r\n' | 指定结果字符串中表格行分隔符的表示方式。可以使用任意符号，默认分隔符为 "\r\n"。 |
| prop.ParaSeparator | 选填 | string | '\r\n' | 指定结果字符串中段落分隔符的表示方式。可以使用任意符号，默认分隔符为 "\r\n"。 |
| prop.TabSymbol | 选填 | string | '\t' | 指定结果字符串中制表符的表示方式。可以使用任意符号，默认符号为 "\t"。 |
| prop.NewLineSeparator | 选填 | string | '\r' | 指定结果字符串中换行符的表示方式。可以使用任意符号，默认分隔符为 "\r"。 |

## 返回值

string（字符串）

## 示例

```javascript
function CorrectText () {
    switch (window.Asc.plugin.info.editorType) {
        case 'word':
        case 'slide': {
            window.Asc.plugin.executeMethod ("GetSelectedText", [{"Numbering": false, "Math": false, "TableCellSeparator": '\n', "ParaSeparator": '\n', "TabSymbol": String.fromCharCode(9)}], function (data) {
                sText = data;
                ExecTypograf (sText);
            });
            break;
        }
        case 'cell': {
            window.Asc.plugin.executeMethod ("GetSelectedText", [{"Numbering": false, "Math": false, "TableCellSeparator": '\n', "ParaSeparator": '\n', "TabSymbol": String.fromCharCode(9)}], function (data) {
                if (data == '') {
                    sText = sText.replace (/\t/g, '\n');
                    ExecTypograf (sText);
                }
                else {
                    sText = data;
                    ExecTypograf (sText);
                }
            });
            break;
        }
    }
}
```
