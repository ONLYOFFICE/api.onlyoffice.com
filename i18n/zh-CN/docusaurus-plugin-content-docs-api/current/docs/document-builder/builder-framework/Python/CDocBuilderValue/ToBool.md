# ToBool（转换为布尔值）

将 `CDocBuilderValue` 对象转换为布尔值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToBool` 方法。

## 语法

```py
def ToBool(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bGlobal = globalObj.ToBool()
```