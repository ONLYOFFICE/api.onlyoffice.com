# CreateNull

创建一个空值。此方法返回当前的 [上下文](../CDocBuilderContext/CDocBuilderContext.md) 并调用其 [CreateNull](../CDocBuilderContext/CreateNull.md) 方法。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.CreateNull` 方法。

## 语法

```py
def CreateNull();
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
null = api.CreateNull()
```