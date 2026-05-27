# GetSelectedText

返回文档中的所选文本。

## 语法

```javascript
expression.GetSelectedText(prop);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| prop | 必需 | object |  | 结果字符串的显示属性。 |
| prop.Numbering | 必需 | boolean |  | 定义结果字符串是否包含编号。 |
| prop.Math | 必需 | boolean |  | 定义结果字符串是否包含数学表达式。 |
| prop.TableCellSeparator | 可选 | string | '\t' | 定义结果字符串中表格单元格分隔符的指定方式。可以使用任何符号。默认分隔符为 "\t"。 |
| prop.TableRowSeparator | 可选 | string | '\r\n' | 定义结果字符串中表格行分隔符的指定方式。可以使用任何符号。默认分隔符为 "\r\n"。 |
| prop.ParaSeparator | 可选 | string | '\r\n' | 定义结果字符串中段落分隔符的指定方式。可以使用任何符号。默认分隔符为 "\r\n"。 |
| prop.TabSymbol | 可选 | string | ' ' | 定义结果字符串中制表符的指定方式。可以使用任何符号。默认符号为 " "。 |
| prop.NewLineSeparator | 可选 | string | '\r' | 定义结果字符串中行分隔符的指定方式。可以使用任何符号。默认分隔符为 "\r"。 |

## 返回值

string

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
