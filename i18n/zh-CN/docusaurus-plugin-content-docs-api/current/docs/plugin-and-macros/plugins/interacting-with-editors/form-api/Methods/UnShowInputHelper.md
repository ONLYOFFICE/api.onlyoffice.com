# UnShowInputHelper

隐藏输入助手。

## 语法

```javascript
expression.UnShowInputHelper(guid, isclear);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| guid | 必需 | string |  | 指定插件标识符的字符串值，必须是 *asc.&#123;UUID&#125;* 类型。 |
| isclear | 必需 | string |  | 定义是否清除输入上下文（**true**）或不清除（**false**）。 |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("UnShowInputHelper", ["asc.{UUID}", true]);
```
