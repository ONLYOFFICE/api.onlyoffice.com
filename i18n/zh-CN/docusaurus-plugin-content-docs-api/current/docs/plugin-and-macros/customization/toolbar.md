---
sidebar_position: -5
---

# 工具栏

插件可以放置在工具栏上：创建自己的标签页并填充内容，或者向标准标签页添加按钮。

![Toolbar item](/assets/images/plugins/toolbar-plugins.png#gh-light-mode-only)![Toolbar item](/assets/images/plugins/toolbar-plugins.dark.png#gh-dark-mode-only)

## 创建工具栏项目 {#creating-a-toolbar-item}

1. 如有必要，使用 **AddToolbarMenuItem** 方法向工具栏菜单添加项目。

   参数说明:

   | 名称    | 类型                                                | 描述                                      |
   | ------- | --------------------------------------------------- | ------------------------------------------------ |
   | *items* | Array.\<[ToolbarMenuMainItem](#toolbarmenumainitem)\> | 包含主工具栏菜单项的数组 |

   返回值：该方法不返回任何数据。

   示例:

   ``` ts
   Asc.plugin.executeMethod("AddToolbarMenuItem", [{
     guid: Asc.plugin.guid,
     tabs: [
       {
         id: "my_tab",
         text: "MYTAB",
         items: [
           {
             id: "idButton1",
             type: "big-button",
             text: "Test item",
             hint: "test hint",
             data: "test_data",
             lockInViewMode: false,
             icons: "resources/%theme-type%(light|dark)/icon%state%(normal)%scale%(default|*).%extension%(png|svg)",
             items: [],
           },
         ],
       },
     ],
   }])
   ```

### 主工具栏菜单项 {#toolbarmenumainitem}

   主工具栏菜单项.

   类型：对象

   属性：

    | 名称   | 类型                                      | 描述                                                     |
    | ------ | ----------------------------------------- | --------------------------------------------------------------- |
    | *guid* | string                                    | 插件的 guid（全局唯一标识符）                                                |
    | *tabs* | Array.\<[ToolbarMenuTab](#toolbarmenutab)\> | 包含当前菜单项工具栏标签页的数组 |

    示例:

    ``` ts
    const oToolbarMenuMainItem = {
      guid: "asc.{9DC93CDB-B576-4F0C-B55E-FCC9C48DD007}",
      tabs: [oToolbarMenuTab],
    }
    ```

### 工具栏菜单选项卡 {#toolbarmenutab}

    工具栏菜单选项卡。

    类型: 对象 (object)

    属性:

    | 名称      | 类型                                          | 描述                                                     |
    | ------- | ------------------------------------------- | ------------------------------------------------------ |
    | *id*    | string                                      | 标签页 ID。标准工具栏标签页 ID 列表见[下方](#standard-toolbar-tab-ids)。 |
    | *text*  | string                                      | 标签页文本。                                                 |
    | *items* | Array.\<[ToolbarMenuItem](#toolbarmenuitem)\> | 包含当前标签页工具栏菜单项的数组。                                      |

   示例:

   ``` ts
   const oToolbarMenuTab = {
     id: "ChatGPT",
     text: "AI Assistant",
     items: [oToolbarMenuItem],
   }
   ```

### 工具栏菜单项 {#toolbarmenuitem}

   工具栏菜单项。

   类型：对象

   属性：

    | 名称             | 种类                                        | 描述                                                                                                                              |
    | ---------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
    | *id*             | string                                      | 菜单项 ID。                                                                                                                             |
    | *type*           | [ToolbarMenuItemType](#toolbarmenuitemtype) | 菜单项类型。                                                                                                                           |
    | *text*           | string                                      | 菜单项标题。如果此字段为""，工具栏按钮仅显示图标，不显示标题。                                                                         |
    | *hint*           | string                                      | 菜单项提示信息。                                                                                                                         |
    | *icons*          | string / object                             | 菜单项图标（参见插件的[config](../structure/configuration/configuration.md#variationsicons)文档）。                                                |
    | *disabled*       | boolean                                     | 指定当前菜单项是否被锁定。                                                                                                              |
    | *enableToggle*   | boolean                                     | 指定工具栏菜单项（当 *"split == false"*）或其上半部分（当 *"split == true"*）是否可切换。                                                 |
    | *lockInViewMode* | boolean                                     | 指定工具栏菜单项在视图模式下（如预览、查看表单、断开连接等）是否自动锁定。                                                               |
    | *separator*      | boolean                                     | 指定工具栏菜单项之间是否使用分隔符。                                                                                                    |
    | *split*          | boolean                                     | 指定工具栏菜单项是否拆分为两部分，并包含下拉菜单。                                                                                      |
    | *items*          | Array.\<ToolbarMenuItem>                    | 包含当前菜单项上下文菜单项的数组。                                                                                                      |

    示例:

    ``` ts
    const oToolbarMenuItem = {
      id: "MeaningItem",
      type: "button",
      text: "Meaning",
      hint: "Meaning",
      icons: "resources/%theme-name%(classic|dark)/%theme-type%(light|dark)/icon%state%(normal|hover)%scale%(default|*).%extension%(png|svg)",
      disabled: false,
      enableToggle: false,
      lockInViewMode: false,
      separator: true,
      split: true,
      items: [
        {
          id: "onMeaningT",
          text: "Explain text in comment",
        },
        {
          id: "onFixSpelling",
          text: "Fix spelling & grammar",
        },
        {
          id: "onMakeLonger",
          text: "Make longer",
        },
        {
          id: "onMakeShorter",
          text: "Make shorter",
        },
      ],
    }
    ```

### 工具栏菜单项类型 {#toolbarmenuitemtype}

   工具栏菜单项类型。*button* 和 *big-button* 两个值等效，可用于指定工具栏按钮。

   类型："button" | "big-button"

### 标准工具栏标签页 ID {#standard-toolbar-tab-ids}

   #### 文档编辑器

   | 标签页ID | 标签页名称                  |
   | ------- | -------------------------- |
   | home    | 主页                       |
   | ins     | 插入                       |
   | draw    | 绘图                       |
   | layout  | 布局                       |
   | links   | 参考                       |
   | forms   | 表单（仅限 PDF 表单）       |
   | review  | 协作                       |
   | protect | 保护                       |
   | view    | 视图                       |
   | plugins | 插件                       |

   #### 电子表格编辑器

   | 标签页 ID  | 标签页名称                                 |
   | ------- | ---------------------------------------------|
   | home    | 主页                                         |
   | ins     | 插入                                         |
   | draw    | 绘图                                         |
   | layout  | 布局                                         |
   | formula | 公式                                         |
   | data    | 数据                                         |
   | pivot   | 数据透视表（当光标位于数据透视表时）            |
   | review  | 协作                                         |
   | protect | 保护                                         |
   | view    | 视图                                         |
   | plugins | 插件                                         |
    
   #### 演示文稿编辑器

   | 标签页 ID | 标签页名称     |
   | --------- | --------------|
   | home      | 主页           |
   | ins       | 插入           |
   | draw      | 绘图           |
   | transit   | 切换           |
   | review    | 协作           |
   | view      | 视图           |
   | plugins   | 插件           |

   #### PDF 编辑器

   | 标签页 ID | 标签页名称 |
   | --------- | ---------- |
   | home      | 主页       |
   | ins       | 插入       |
   | comment   | 评论       |
   | view      | 视图       |
   | plugins   | 插件       |

   ### 样例

   #### 样例1

   普通按钮。
    
   ``` json
   {
     "text": "caption",
     "split": false,
     "enableToggle": false
   }
   ```

   ![Regular button](/assets/images/plugins/regular-button.png#gh-light-mode-only)![Regular button](/assets/images/plugins/regular-button.dark.png#gh-dark-mode-only)

   #### 样例2

   一个被拆分为两部分的按钮：按钮的上半部分可以单独切换，下半部分包含一个下拉菜单。
    
   ``` json
   {
     "text": "caption",
     "split": true,
     "enableToggle": true,
     "items": []
   }
   ```

   ![Split and toggled button](/assets/images/plugins/split-toggle-button.png#gh-light-mode-only)![Split and toggled button](/assets/images/plugins/split-toggle-button.dark.png#gh-dark-mode-only)

   #### 样例3

   一个拆分为两部分的按钮，每部分可以单独点击，按钮的下半部分包含一个下拉菜单。
    
   ``` json
   {
     "text": "caption",
     "split": true,
     "enableToggle": true,
     "items": []
   }
   ```

   ![Split button](/assets/images/plugins/split-button.png#gh-light-mode-only)![Split button](/assets/images/plugins/split-button.dark.png#gh-dark-mode-only)

   #### 样例4

   带有下拉菜单的按钮，点击按钮时会打开该菜单。
    
   ``` json
   {
     "text": "caption",
     "split": false,
     "enableToggle": false,
     "items": []
   }
   ```

   ![Button with menu](/assets/images/plugins/button-with-menu.png#gh-light-mode-only)![Button with menu](/assets/images/plugins/button-with-menu.dark.png#gh-dark-mode-only)

   #### 样例5

   可切换的按钮。
    
   ``` json
   {
     "text": "caption",
     "split": false,
     "enableToggle": true
   }
   ```

   ![Toggled button](/assets/images/plugins/toggled-button.png#gh-light-mode-only)![Toggled button](/assets/images/plugins/toggled-button.dark.png#gh-dark-mode-only)

2. [订阅](../interacting-with-editors/overview/how-to-attach-events.md) **onToolbarMenuClick** 事件，当工具栏菜单按钮被点击时调用。

   参数说明：

    | 名称  | 类型   | 描述      |
    | ----- | ------ | --------- |
    | *id*  | string | 项目 ID。 |

    示例:

    <!-- eslint-skip -->
    
    ``` ts
    window.Asc.plugin.event_onToolbarMenuClick = (id) => {
      this._onCustomMenuClick("toolbarMenuEvents", id)
    }
    ```

## 更新工具栏菜单项

要更新工具栏菜单项，请指定**更新工具栏菜单项**方法。

参数：

| 名称    | 类型                                                  | 说明                                      |
|---------|-------------------------------------------------------|--------------------------------------------------|
| *items* | Array.\<[工具栏主菜单](#toolbarmenumainitem)\> | 包含主工具栏菜单项的数组。 |

返回值：此方法不返回任何值。

示例：

``` ts
Asc.Buttons.updateToolbarMenu = function(id, name, buttons)
  {
    let buttonMainToolbar = new Asc.ButtonToolbar(null, id);
    buttonMainToolbar.text = name;

    let items = {
      guid : window.Asc.plugin.guid,
      tabs : []
    };

    buttonMainToolbar.childs = buttons;
    for (let i = 0, len = buttons.length; i < len; i++)
      buttons[i].parent = buttonMainToolbar;

    buttonMainToolbar.toToolbar(items);

    if (items.tabs.length > 0)
      window.Asc.plugin.executeMethod("UpdateToolbarMenuItem", [items]);
  };
```

## 点击工具栏项

使用 **attachToolbarMenuClickEvent** 添加事件监听器，即当工具栏菜单中指定按钮被点击并触发事件时调用的函数。对于每个工具栏菜单按钮，可以通过其 ID 指定单独的事件监听器。

参数说明:

| 名称     | 类型      | 描述             |
| -------- | --------- | ---------------- |
| *id*     | string    | 事件名称         |
| *action* | function  | 事件监听器函数   |

返回值：此方法不返回任何数据。

示例:

``` ts
plugin.attachToolbarMenuClickEvent("my_tab", (data) => {
  console.log(data)
})
```
