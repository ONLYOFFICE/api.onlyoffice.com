# ToDouble（转换为双精度浮点数）

将 `CDocBuilderValue` 对象转换为双精度浮点数。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToDouble` 方法。

## 语法

```py
def ToDouble(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
dGlobal = globalObj.ToDouble()
```