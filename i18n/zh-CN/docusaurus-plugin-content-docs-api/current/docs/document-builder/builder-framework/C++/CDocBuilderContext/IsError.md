# IsError

检查JS中的错误。错误消息和调用堆栈将被写入`std::cerr`。

> 请注意，对于`.docbuilder`文件，不使用`CDocBuilderContext.IsError`方法。

## 语法

```cpp
bool IsError();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
bool bError = oContext.IsError();
CDocBuilder::Dispose();
```