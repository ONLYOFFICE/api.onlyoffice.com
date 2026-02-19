# Get（获取）

通过索引返回数组值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Get` 方法。

## 语法

```cpp
CDocBuilderValue Get(const int& nIndex);
```

## 参数

| **名称** | **数据类型** | **描述**         |
| -------- | ------------ | ---------------- |
| nIndex   | const int&   | 数组值的索引。   |

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
CValue aCharts = oDocument.Call("GetAllCharts");
CValue oChart = aCharts.Get(1);
CDocBuilder::Dispose();
```

也可以使用 `operator[]` 后缀表达式通过索引获取数组值：

```cpp
CDocBuilderValue operator[](const int& name);
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
CValue aCharts = oDocument.Call("GetAllCharts");
CValue oChart = aCharts[1];
CDocBuilder::Dispose();
```