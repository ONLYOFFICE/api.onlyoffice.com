# InputText

向文档中插入文本。

## 语法

```javascript
expression.InputText(text, textReplace);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string |  | 指定要插入文档中的文本的字符串值。 |
| textReplace | 必需 | string |  | 指定要被新文本替换的文本的字符串值。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("InputText", ["ONLYOFFICE Plugins", "ONLYOFFICE for developers"]);
```
