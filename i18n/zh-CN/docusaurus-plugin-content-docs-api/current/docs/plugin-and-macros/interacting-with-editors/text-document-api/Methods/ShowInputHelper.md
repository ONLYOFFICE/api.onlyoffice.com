# 显示输入助手

显示输入助手。

## 语法

```javascript
expression.ShowInputHelper(guid, w, h, isKeyboardTake);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| guid | 必填 | string |  | 一个字符串值，指定插件的标识符，格式必须为 *asc.&#123;UUID&#125;* 类型。 |
| w | 必填 | number |  | 一个数值，指定窗口的宽度，单位为毫米。 |
| h | 必填 | number |  | 一个数值，指定窗口的高度，单位为毫米。 |
| isKeyboardTake | 必填 | boolean |  | 指定是否捕获键盘输入（**true** 为捕获，**false** 为不捕获）。 |

## 返回值

此方法不返回任何值。

## 示例

```javascript
window.Asc.plugin.executeMethod ("ShowInputHelper", ["asc.{UUID}", 70, 70, true]);
```
