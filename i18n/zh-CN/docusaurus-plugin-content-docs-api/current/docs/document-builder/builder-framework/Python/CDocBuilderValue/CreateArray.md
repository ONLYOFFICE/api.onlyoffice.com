# CreateArray（创建数组）

创建一个数组值。此方法返回当前的[上下文](../CDocBuilderContext/CDocBuilderContext.md)并调用其[CreateArray](../CDocBuilderContext/CreateArray.md)方法。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.CreateArray` 方法。

## 语法

```py
def CreateArray(int length);
```

## 参数

| 参数   | 类型 | 描述         |
| ------ | ---- | ------------ |
| length | int  | 数组的长度。 |

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
array = api.CreateArray()
```