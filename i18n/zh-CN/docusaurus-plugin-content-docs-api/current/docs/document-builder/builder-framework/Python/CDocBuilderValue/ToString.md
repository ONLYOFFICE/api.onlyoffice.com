# ToString（转换为字符串）

将 `CDocBuilderValue` 对象转换为字符串。

> 请注意，在 `.docbuilder` 文件中，不会使用 `CDocBuilderValue.ToString` 方法。

## 语法

```py
def ToString(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
sGlobal = globalObj.ToString()
```