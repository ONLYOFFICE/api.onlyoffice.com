# CreateUndefined（创建未定义值）

创建一个未定义值。此方法返回当前的[上下文](../CDocBuilderContext/CDocBuilderContext.md)并调用其[CreateUndefined](../CDocBuilderContext/CreateUndefined.md)方法。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderValue.CreateUndefined` 方法。

## 语法

```py
def CreateUndefined();
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
undefined = api.CreateUndefined()
```