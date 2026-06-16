---
sidebar_position: 2
---

# 连接器窗口

**ConnectorWindow** 类用于管理连接器在编辑器内创建的模态窗口。要创建它，请使用 connector 对象的 [createWindow](./connector-class.md#createwindow) 方法。

您可以在下面找到此类可用的方法。

## attachEvent

调用函数来向模态窗口框架添加事件监听器。每当将指定事件传递给目标时，都会调用此函数。所有可用事件的列表与插件的列表相同。

### 参数

| 名称   | 类型     | 描述         |
| ------ | -------- | ------------------- |
| id     | string   | 事件名称。     |
| action | function | 事件侦听器。 |

### 示例

```ts
const connector = docEditor.createConnector();
const testConnectorWindow = connector.createWindow();
testConnectorWindow.attachEvent("onWindowMessage", (message) => {
  console.log(`panel message: ${message}`);
});
```

## dispatchEvent

调用函数来将事件发送到模态窗口框架。所有可用事件的列表与插件的列表相同。

### 参数

| 名称 | 类型            | 描述     |
| ---- | --------------- | --------------- |
| name | string          | 事件名称。 |
| data | string \| object | 事件数据。 |

### 示例

```ts
const connector = docEditor.createConnector();
const testConnectorWindow = connector.createWindow();
testConnectorWindow.dispatchEvent("messageName", {
  prop: "value",
});
```

## show

调用函数来在编辑器内显示模态窗口。

### 参数

| 名称     | 类型   | 描述                                                                                                                                      |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| settings | object | 模态窗口参数与插件 [variations](../../../plugins/configuration/configuration.md#variations) 相同。 |

### 示例

```ts
const connector = docEditor.createConnector();
const testConnectorWindow = connector.createWindow();
testConnectorWindow.show({
  url: "./window/panel.html",
  description: "Panel example!",
  type: "panel",
  EditorsSupport: ["word", "cell", "slide", "pdf"],
  isVisual: true,
  buttons: [],
  icons: "./icon.svg",
});
```

## 窗口代码方法

在连接器窗口代码中，您还可以使用以下方法：

### attachEvent

调用函数来订阅来自插件的消息。

#### 参数

| 名称     | 类型     | 描述         |
| -------- | -------- | ------------------- |
| id       | string   | 事件名称。     |
| action   | function | 事件侦听器。  |

#### 返回

此方法不返回任何数据。

#### 示例

```ts
window.Asc.plugin.attachEvent("messageName", (message) => {
  console.log(message);
});
```

### sendToPlugin

调用函数来从模态窗口向编辑器发送消息。

#### 参数

| 名称 | 类型   | 描述     |
| ---- | ------ | --------------- |
| name | string | 事件名称。 |
| data | object | 事件数据。 |

#### 示例

```ts
window.Asc.plugin.sendToPlugin("onWindowMessage", {type: "onWindowReady"});
```
