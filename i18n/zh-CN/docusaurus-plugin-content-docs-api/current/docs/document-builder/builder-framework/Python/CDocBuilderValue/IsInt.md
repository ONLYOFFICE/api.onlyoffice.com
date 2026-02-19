# IsInt

如果 `CDocBuilderValue` 对象是整数，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsInt` 方法。

## 语法

```py
def IsInt(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bInt = globalObj.IsInt()
```