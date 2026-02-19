# Clear（清空）

清空 `CDocBuilderValue` 对象。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Clear` 方法。

## 语法

```cpp
void Clear();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oDocument = oApi.Call("GetDocument");
oDocument.Clear();
CDocBuilder::Dispose();
```