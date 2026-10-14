# SetAction

设置单击链接时执行的操作。

## 语法

```javascript
expression.SetAction(action);
```

`expression` - 表示 [ApiLinkAnnotation](../ApiLinkAnnotation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| action | 必需 | [ApiBaseAction](../../ApiBaseAction/ApiBaseAction.md) \| null \| undefined |  | GoTo、URI 或其他 PDF 操作；null 会移除该操作。 |

## 返回值

boolean
