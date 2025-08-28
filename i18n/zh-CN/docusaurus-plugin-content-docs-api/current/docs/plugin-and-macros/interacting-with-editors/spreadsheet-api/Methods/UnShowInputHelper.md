# 隐藏输入助手

隐藏输入助手窗口。

## 语法

```javascript
expression.UnShowInputHelper(guid, isclear);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/可选** | **数据类型** | **默认值** | **说明** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| guid | 必填 | string |  | 一个字符串值，指定插件的标识符，格式必须为 *asc.&#123;UUID&#125;* 类型。 |
| isclear | 必填 | string |  | 指定是否清除输入上下文（**true** 为清除，**false** 为不清除）。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("UnShowInputHelper", ["asc.{UUID}", true]);
```
