# ToInt（转换为整数）

将 `CDocBuilderValue` 对象转换为整数。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToInt` 方法。

## 语法

```py
def ToInt(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
nGlobal = globalObj.ToInt()
```