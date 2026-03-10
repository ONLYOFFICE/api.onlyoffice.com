# SetRotation

设置页面旋转角度

## 语法

```javascript
expression.SetRotation(nAngle);
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nAngle | 必需 | number |  | 未提供描述。 |

## 返回值

boolean

## 示例

This example sets rotate for first page in document.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);
```
