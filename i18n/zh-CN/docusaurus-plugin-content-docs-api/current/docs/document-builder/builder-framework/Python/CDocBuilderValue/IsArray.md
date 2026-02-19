# IsArray

如果 `CDocBuilderValue` 对象是数组，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsArray` 方法。

## 语法

```py
def IsArray(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bArray = globalObj.IsArray()
```