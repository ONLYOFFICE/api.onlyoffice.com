# 输入文本

向文档中插入文本。

## 语法

```javascript
expression.InputText(text, textReplace);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称**      | **必选/可选** | **数据类型**       | **默认值** | **说明**                          |
|---------------|----------------|--------------------|------------|-----------------------------------|
| text          | 必选           | string             |            | 指定要插入文档中的文本字符串。   |
| textReplace   | 必选           | string             |            | 指定要被新文本替换的文本字符串。   |

## 返回值

该方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("InputText", ["ONLYOFFICE Plugins", "ONLYOFFICE for developers"]);
```
