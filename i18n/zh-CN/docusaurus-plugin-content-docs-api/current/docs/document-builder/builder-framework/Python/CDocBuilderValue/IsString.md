# IsString

如果 `CDocBuilderValue` 对象是字符串，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsString` 方法。

## 语法

```py
def IsString(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bString = globalObj.IsString()
```