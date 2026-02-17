# IsDouble（是双精度浮点数）

如果 `CDocBuilderValue` 对象是双精度浮点数值，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsDouble` 方法。

## 语法

```py
def IsDouble(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bDouble = globalObj.IsDouble()
```