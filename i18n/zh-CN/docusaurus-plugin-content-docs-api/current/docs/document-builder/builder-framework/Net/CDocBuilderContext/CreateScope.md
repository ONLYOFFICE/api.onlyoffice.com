# CreateScope（创建作用域）

创建一个[上下文作用域](../CDocBuilderContextScope/CDocBuilderContextScope.md)，该作用域为在本地范围内执行的所有操作设置执行上下文。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.CreateScope` 方法。

## 语法

```cs
CDocBuilderContextScope^ CreateScope();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CContextScope oScope = oContext.CreateScope();
CDocBuilder.Destroy();
```