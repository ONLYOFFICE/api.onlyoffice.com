# CreateObject（创建对象）

创建一个空对象，类似于 JavaScript 中的 `{}`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateObject` 方法。

## 语法

```cpp
CDocBuilderValue CreateObject();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oObject = oContext.CreateObject();
CDocBuilder::Dispose();
```