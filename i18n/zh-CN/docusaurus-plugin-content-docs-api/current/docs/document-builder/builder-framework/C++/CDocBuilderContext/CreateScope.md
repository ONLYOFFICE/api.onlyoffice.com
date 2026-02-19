# CreateScope（创建作用域）

创建一个[上下文作用域](../CDocBuilderContextScope/CDocBuilderContextScope.md)，该作用域为在本地范围内执行的所有操作设置执行上下文。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.CreateScope` 方法。

## 语法

```cpp
CDocBuilderContextScope CreateScope();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CContextScope oScope = oContext.CreateScope();
CDocBuilder::Dispose();
```