---
sidebar_position: -5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 自定义主题

您可以通过将 JSON 配置文件添加到服务器上的主题目录来为 ONLYOFFICE 文档创建自定义界面主题。

## 创建主题文件

创建一个具有以下结构的 `.json` 文件：

```json
{
  "name": "Amazing theme",
  "l10n": {
    "fr": "Thème incroyable",
    "de": "Geweldig thema"
  },
  "id": "theme-amazing",
  "type": "light",
  "colors": {
    "toolbar-header-document": "#446995",
    "toolbar-header-spreadsheet": "#40865c",
    "toolbar-header-presentation": "#aa5252",
    "border-color-shading": "rgba(0, 0, 0, 0.15)",
    ...
  }
}
```

### 参数

| 参数 | 类型 | 描述 |
| ---- | ---- | ---- |
| `name`    | `string` | 在主题选择器中显示的主题名称。 |
| `l10n`    | `object` | 本地化主题名称。键为两个字母的语言代码，值为翻译后的名称。 |
| `id`      | `string` | 唯一的主题标识符。必须以 `theme-` 开头，可包含 `a-Z`、`0-9`、`-`、`_`。 |
| `type`    | `string` | 基础主题类型：`dark` 或 `light`。 |
| `colors`  | `object` | 颜色定义，使用十六进制（`#446995`）或 RGBA（`rgba(0, 0, 0, 0.15)`）格式。 |

## 部署主题文件

将 `.json` 文件放置到主题目录中：

<Tabs>
    <TabItem value="docker" label="Docker">
        ``` bash
        sudo docker cp /path/theme-file.json {container_id}:/var/www/onlyoffice/documentserver/web-apps/apps/common/main/resources/themes
        ```
    </TabItem>
    <TabItem value="linux" label="Linux">
        ``` bash
        cp /path/theme-file.json /var/www/onlyoffice/documentserver/web-apps/apps/common/main/resources/themes
        ```
    </TabItem>
    <TabItem value="windows" label="Windows">
        ``` bash
        copy C:\path\theme-file.json "%ProgramFiles%\ONLYOFFICE\DocumentServer\web-apps\apps\common\main\resources\themes"
        ```
    </TabItem>
</Tabs>

服务器缓存每 5 分钟刷新一次。放置文件后，请刷新编辑器页面。在某些情况下，您可能需要重新启动服务并清除缓存才能使更改生效。

部署后，主题将在 **视图** 选项卡 > **界面主题** 中可用。

## 通过 API 应用自定义主题

要通过编辑器初始化配置应用自定义主题，请将其 `id` 传递给 [`editorConfig.customization.uiTheme`](../../usage-api/config/editor/customization/customization-standard-branding.md#uitheme) 参数：

```ts
const config = {
  editorConfig: {
    customization: {
      uiTheme: "theme-amazing",
    },
  },
}
```

## 颜色参数 {#color-parameters}

`colors` 对象支持以下参数。所有默认值对应内置浅色主题。

### 标题工具栏

| 参数 | 默认值 | 描述 | 示例 |
| ---- | ------ | ---- | ---- |
| `toolbar-header-document` | `#446995` | 文本文档的工具栏标题颜色。 | ![toolbar-header-document](/assets/images/editor/themes/toolbar-header-document.png) |
| `toolbar-header-spreadsheet` | `#40865c` | 电子表格的工具栏标题颜色。 | ![toolbar-header-spreadsheet](/assets/images/editor/themes/toolbar-header-spreadsheet.png) |
| `toolbar-header-presentation` | `#BE664F` | 演示文稿的工具栏标题颜色。 | ![toolbar-header-presentation](/assets/images/editor/themes/toolbar-header-presentation.png) |
| `toolbar-header-pdf` | `#AA5252` | PDF 的工具栏标题颜色。 | ![toolbar-header-pdf](/assets/images/editor/themes/toolbar-header-pdf.png) |
| `text-toolbar-header-on-background-document` | `#38567A` | 文本文档工具栏标题中用户首字母的文本颜色。 | ![text-toolbar-header-on-background-document](/assets/images/editor/themes/text-toolbar-header-on-background-document.png) |
| `text-toolbar-header-on-background-spreadsheet` | `#336B49` | 电子表格工具栏标题中用户首字母的文本颜色。 | ![text-toolbar-header-on-background-spreadsheet](/assets/images/editor/themes/text-toolbar-header-on-background-spreadsheet.png) |
| `text-toolbar-header-on-background-presentation` | `#854535` | 演示文稿工具栏标题中用户首字母的文本颜色。 | ![text-toolbar-header-on-background-presentation](/assets/images/editor/themes/text-toolbar-header-on-background-presentation.png) |
| `text-toolbar-header-on-background-pdf` | `#8D4444` | PDF 工具栏标题中用户首字母的文本颜色。 | ![text-toolbar-header-on-background-pdf](/assets/images/editor/themes/text-toolbar-header-on-background-pdf.png) |

### 背景

| 参数 | 默认值 | 描述 | 示例 |
| ---- | ------ | ---- | ---- |
| `background-normal` | `#fff` | 窗口、下拉面板和常规控件的背景颜色。 | ![background-normal](/assets/images/editor/themes/background-normal.png) |
| `background-toolbar` | `#f7f7f7` | 工具栏、所有面板和对话框标题的背景颜色。 | ![background-toolbar](/assets/images/editor/themes/background-toolbar.png) |
| `background-toolbar-additional` | `#efefef` | 非活动工作表的附加工具栏背景颜色。 | ![background-toolbar-additional](/assets/images/editor/themes/background-toolbar-additional.png) |
| `background-primary-dialog-button` | `#444` | 主对话框按钮的背景颜色。 | ![background-primary-dialog-button](/assets/images/editor/themes/background-primary-dialog-button.png) |
| `background-accent-button` | `#446995` | 文本文档编辑器中强调按钮的背景颜色。 | ![background-accent-button](/assets/images/editor/themes/background-accent-button.png) |
| `background-tab-underline` | `#444` | 灰色工具栏中选项卡下划线的背景颜色。 | ![background-tab-underline](/assets/images/editor/themes/background-tab-underline.png) |
| `background-notification-popover` | `#fcfed7` | 通知弹出框的背景颜色。 | ![background-notification-popover](/assets/images/editor/themes/background-notification-popover.png) |
| `background-notification-badge` | `#ffd112` | 图标通知徽章的背景颜色。 | ![background-notification-badge](/assets/images/editor/themes/background-notification-badge.png) |
| `background-scrim` | `rgba(0, 0, 0, 0.2)` | 降低模态窗口背景强度的遮罩颜色。 | ![background-scrim](/assets/images/editor/themes/background-scrim.png) |
| `background-loader` | `rgba(24, 24, 24, 0.9)` | 加载器背景颜色。 | ![background-loader](/assets/images/editor/themes/background-loader.png) |
| `background-alt-key-hint` | `#FFD938` | 按下 Alt 键时按钮快捷键提示的背景颜色。 | ![background-alt-key-hint](/assets/images/editor/themes/background-alt-key-hint.png) |
| `background-contrast-popover` | `#fff` | 信息提示的背景颜色。 | ![background-contrast-popover](/assets/images/editor/themes/background-contrast-popover.png) |
| `background-fill-button` | `#FFD112` | 表单标题中按钮的背景颜色。 | ![background-fill-button](/assets/images/editor/themes/background-fill-button.png) |
| `shadow-contrast-popover` | `rgba(0, 0, 0, 0.3)` | 信息提示的阴影颜色。 | ![shadow-contrast-popover](/assets/images/editor/themes/shadow-contrast-popover.png) |

### 高亮

| 参数 | 默认值 | 描述 | 示例 |
| ---- | ------ | ---- | ---- |
| `highlight-button-hover` | `#e0e0e0` | 悬停时按钮、下拉菜单项和其他交互列表的高亮颜色。 | ![highlight-button-hover](/assets/images/editor/themes/highlight-button-hover.png) |
| `highlight-button-pressed` | `#cbcbcb` | 按下按钮的高亮颜色。 | ![highlight-button-pressed](/assets/images/editor/themes/highlight-button-pressed.png) |
| `highlight-button-pressed-hover` | `#bababa` | 悬停时按下按钮的高亮颜色。 | ![highlight-button-pressed-hover](/assets/images/editor/themes/highlight-button-pressed-hover.png) |
| `highlight-primary-dialog-button-hover` | `#1c1c1c` | 悬停时主对话框按钮的高亮颜色。 | ![highlight-primary-dialog-button-hover](/assets/images/editor/themes/highlight-primary-dialog-button-hover.png) |
| `highlight-accent-button-hover` | `#375478` | 悬停时强调按钮的高亮颜色。 | ![highlight-accent-button-hover](/assets/images/editor/themes/highlight-accent-button-hover.png) |
| `highlight-accent-button-pressed` | `#293f59` | 按下强调按钮的高亮颜色。 | ![highlight-accent-button-pressed](/assets/images/editor/themes/highlight-accent-button-pressed.png) |
| `highlight-header-button-hover` | `rgba(255, 255, 255, 0.15)` | 悬停时标题按钮的高亮颜色。 | ![highlight-header-button-hover](/assets/images/editor/themes/highlight-header-button-hover.png) |
| `highlight-header-button-pressed` | `rgba(255, 255, 255, 0.25)` | 按下标题按钮的高亮颜色。 | ![highlight-header-button-pressed](/assets/images/editor/themes/highlight-header-button-pressed.png) |
| `highlight-toolbar-tab-underline` | `#444` | 灰色工具栏中活动选项卡下划线的高亮颜色。 | ![highlight-toolbar-tab-underline](/assets/images/editor/themes/highlight-toolbar-tab-underline.png) |
| `highlight-text-select` | `#3494fb` | 常规控件中选中文本的高亮颜色。 | ![highlight-text-select](/assets/images/editor/themes/highlight-text-select.png) |
| `highlight-fill-button-hover` | `#FFE165` | 悬停时表单标题按钮的高亮颜色。 | ![highlight-fill-button-hover](/assets/images/editor/themes/highlight-fill-button-hover.png) |
| `highlight-fill-button-pressed` | `#DFB500` | 表单标题中按下按钮的背景颜色。 | ![highlight-fill-button-pressed](/assets/images/editor/themes/highlight-fill-button-pressed.png) |

### 边框

| 参数 | 默认值 | 描述 | 示例 |
| ---- | ------ | ---- | ---- |
| `border-toolbar` | `#cbcbcb` | 工具栏、面板和模态窗口的边框颜色。 | ![border-toolbar](/assets/images/editor/themes/border-toolbar.png) |
| `border-toolbar-active-panel-top` | `#f7f7f7` | 顶部工具栏活动面板的边框颜色。 | ![border-toolbar-active-panel-top](/assets/images/editor/themes/border-toolbar-active-panel-top.png) |
| `border-divider` | `#dfdfdf` | 分隔工具栏和面板元素的边框颜色。 | ![border-divider](/assets/images/editor/themes/border-divider.png) |
| `border-regular-control` | `#c0c0c0` | 常规控件的边框颜色。 | ![border-regular-control](/assets/images/editor/themes/border-regular-control.png) |
| `border-toolbar-button-hover` | `#e0e0e0` | 悬停时并排工具栏按钮的通用边框颜色。 | ![border-toolbar-button-hover](/assets/images/editor/themes/border-toolbar-button-hover.png) |
| `border-preview-hover` | `#bababa` | 悬停时预览控件元素的边框颜色。 | ![border-preview-hover](/assets/images/editor/themes/border-preview-hover.png) |
| `border-preview-select` | `#888` | 按下预览控件元素的边框颜色。 | ![border-preview-select](/assets/images/editor/themes/border-preview-select.png) |
| `border-control-focus` | `#848484` | 获得焦点的常规控件的边框颜色。 | ![border-control-focus](/assets/images/editor/themes/border-control-focus.png) |
| `border-color-shading` | `rgba(0, 0, 0, 0.15)` | 调色板颜色的边框颜色。 | ![border-color-shading](/assets/images/editor/themes/border-color-shading.png) |
| `border-error` | `#f62211` | 输入无效值时输入框的边框颜色。 | ![border-error](/assets/images/editor/themes/border-error.png) |
| `border-contrast-popover` | `#fff` | 信息提示的边框颜色。 | ![border-contrast-popover](/assets/images/editor/themes/border-contrast-popover.png) |
| `border-button-pressed-focus` | `#848484` | 获得焦点的按下按钮的边框颜色。 | ![border-button-pressed-focus](/assets/images/editor/themes/border-button-pressed-focus.png) |

### 文本

| 参数 | 默认值 | 描述 | 示例 |
| ---- | ------ | ---- | ---- |
| `text-normal` | `rgba(0, 0, 0, 0.8)` | 默认文本颜色。 | ![text-normal](/assets/images/editor/themes/text-normal.png) |
| `text-normal-pressed` | `rgba(0, 0, 0, 0.8)` | 活动元素（选中的选项卡、按下的按钮）的文本颜色。 | ![text-normal-pressed](/assets/images/editor/themes/text-normal-pressed.png) |
| `text-secondary` | `rgba(0, 0, 0, 0.6)` | 次要文本颜色（注释、说明）。 | ![text-secondary](/assets/images/editor/themes/text-secondary.png) |
| `text-tertiary` | `rgba(0, 0, 0, 0.4)` | 三级文本颜色（占位符）。 | ![text-tertiary](/assets/images/editor/themes/text-tertiary.png) |
| `text-link` | `#445799` | 通知弹出框中链接和链接按钮的文本颜色。 | ![text-link](/assets/images/editor/themes/text-link.png) |
| `text-link-hover` | `#445799` | 悬停时弹出框中链接和链接按钮的文本颜色。 | ![text-link-hover](/assets/images/editor/themes/text-link-hover.png) |
| `text-link-active` | `#445799` | 按下的弹出框中链接和链接按钮的文本颜色。 | ![text-link-active](/assets/images/editor/themes/text-link-active.png) |
| `text-link-visited` | `#445799` | 已访问的弹出框中链接和链接按钮的文本颜色。 | ![text-link-visited](/assets/images/editor/themes/text-link-visited.png) |
| `text-inverse` | `#fff` | 反色工具栏背景上的文本颜色。 | ![text-inverse](/assets/images/editor/themes/text-inverse.png) |
| `text-toolbar-header` | `#fff` | 工具栏标题的文本颜色。 | ![text-toolbar-header](/assets/images/editor/themes/text-toolbar-header.png) |
| `text-contrast-background` | `#fff` | 对比背景（加载器、单元格标题）的文本颜色。 | ![text-contrast-background](/assets/images/editor/themes/text-contrast-background.png) |
| `text-alt-key-hint` | `rgba(0, 0, 0, 0.8)` | 按下 Alt 键时按钮快捷键提示的文本颜色。 | ![text-alt-key-hint](/assets/images/editor/themes/text-alt-key-hint.png) |

### 图标

| 参数 | 默认值 | 描述 | 示例 |
| ---- | ------ | ---- | ---- |
| `icon-normal` | `#444` | 图标颜色。 | ![icon-normal](/assets/images/editor/themes/icon-normal.png) |
| `icon-normal-pressed` | `#444` | 活动元素（选中的选项卡、按下的按钮）的图标颜色。 | ![icon-normal-pressed](/assets/images/editor/themes/icon-normal-pressed.png) |
| `icon-inverse` | `#fff` | 反色图标颜色。 | |
| `icon-toolbar-header` | `#fff` | 工具栏标题中的图标颜色（用户首字母图标）。 | ![icon-toolbar-header](/assets/images/editor/themes/icon-toolbar-header.png) |
| `icon-notification-badge` | `#000` | 工具栏标题中通知徽章的图标颜色。 | ![icon-notification-badge](/assets/images/editor/themes/icon-notification-badge.png) |
| `icon-contrast-popover` | `#fff` | 对比信息提示的图标颜色。 | |
| `icon-success` | `#090` | 已解决评论复选框或成功指示的颜色。 | ![icon-success](/assets/images/editor/themes/icon-success.png) |

### 画布

| 参数 | 默认值 | 描述 | 示例 |
| ---- | ------ | ---- | ---- |
| `canvas-background` | `#eee` | 文档页面、工作表或幻灯片后面的工作区背景颜色。 | ![canvas-background](/assets/images/editor/themes/canvas-background.png) |
| `canvas-content-background` | `#fff` | 文档页面、单元格或幻灯片的背景颜色。 | ![canvas-content-background](/assets/images/editor/themes/canvas-content-background.png) |
| `canvas-page-border` | `#ccc` | 文档页面的边框颜色。 | ![canvas-page-border](/assets/images/editor/themes/canvas-page-border.png) |
| `canvas-ruler-background` | `#fff` | 标尺背景颜色。 | ![canvas-ruler-background](/assets/images/editor/themes/canvas-ruler-background.png) |
| `canvas-ruler-border` | `#cbcbcb` | 标尺边框颜色。 | ![canvas-ruler-border](/assets/images/editor/themes/canvas-ruler-border.png) |
| `canvas-ruler-margins-background` | `#d9d9d9` | 标尺边距的背景颜色。 | ![canvas-ruler-margins-background](/assets/images/editor/themes/canvas-ruler-margins-background.png) |
| `canvas-ruler-mark` | `#555` | 标尺刻度（目标和文本）的颜色。 | ![canvas-ruler-mark](/assets/images/editor/themes/canvas-ruler-mark.png) |
| `canvas-ruler-handle-border` | `#555` | 标尺手柄的边框颜色。 | ![canvas-ruler-handle-border](/assets/images/editor/themes/canvas-ruler-handle-border.png) |
| `canvas-ruler-handle-border-disabled` | `#aaa` | 禁用标尺手柄的边框颜色。 | ![canvas-ruler-handle-border-disabled](/assets/images/editor/themes/canvas-ruler-handle-border-disabled.png) |
| `canvas-high-contrast` | `#000` | 高对比度元素（选项卡标记、分组单元格符号）的颜色。 | ![canvas-high-contrast](/assets/images/editor/themes/canvas-high-contrast.png) |
| `canvas-high-contrast-disabled` | `#666` | 禁用的高对比度元素的颜色。 | ![canvas-high-contrast-disabled](/assets/images/editor/themes/canvas-high-contrast-disabled.png) |
| `canvas-cell-border` | `rgba(0, 0, 0, 0.1)` | 单元格边框颜色。 | ![canvas-cell-border](/assets/images/editor/themes/canvas-cell-border.png) |
| `canvas-cell-title-text` | `#444` | 单元格标题的文本颜色。 | ![canvas-cell-title-text](/assets/images/editor/themes/canvas-cell-title-text.png) |
| `canvas-cell-title-background` | `#f7f7f7` | 单元格标题的背景颜色。 | ![canvas-cell-title-background](/assets/images/editor/themes/canvas-cell-title-background.png) |
| `canvas-cell-title-background-hover` | `#dfdfdf` | 悬停时单元格标题的背景颜色。 | ![canvas-cell-title-background-hover](/assets/images/editor/themes/canvas-cell-title-background-hover.png) |
| `canvas-cell-title-background-selected` | `#cfcfcf` | 选中单元格标题的背景颜色。 | ![canvas-cell-title-background-selected](/assets/images/editor/themes/canvas-cell-title-background-selected.png) |
| `canvas-cell-title-border` | `#d8d8d8` | 单元格标题的边框颜色。 | ![canvas-cell-title-border](/assets/images/editor/themes/canvas-cell-title-border.png) |
| `canvas-cell-title-border-hover` | `#c9c9c9` | 悬停时单元格标题的边框颜色。 | ![canvas-cell-title-border-hover](/assets/images/editor/themes/canvas-cell-title-border-hover.png) |
| `canvas-cell-title-border-selected` | `#bbb` | 选中单元格标题的边框颜色。 | ![canvas-cell-title-border-selected](/assets/images/editor/themes/canvas-cell-title-border-selected.png) |
| `canvas-scroll-thumb` | `#f1f1f1` | 滚动条滑块颜色。 | ![canvas-scroll-thumb](/assets/images/editor/themes/canvas-scroll-thumb.png) |
| `canvas-scroll-thumb-hover` | `#cfcfcf` | 悬停时滚动条滑块颜色。 | ![canvas-scroll-thumb-hover](/assets/images/editor/themes/canvas-scroll-thumb-hover.png) |
| `canvas-scroll-thumb-pressed` | `#adadad` | 按下滚动条滑块的颜色。 | ![canvas-scroll-thumb-pressed](/assets/images/editor/themes/canvas-scroll-thumb-pressed.png) |
| `canvas-scroll-thumb-border` | `#cfcfcf` | 滚动条滑块的边框颜色。 | ![canvas-scroll-thumb-border](/assets/images/editor/themes/canvas-scroll-thumb-border.png) |
| `canvas-scroll-thumb-border-hover` | `#cfcfcf` | 悬停时滚动条滑块的边框颜色。 | ![canvas-scroll-thumb-border-hover](/assets/images/editor/themes/canvas-scroll-thumb-border-hover.png) |
| `canvas-scroll-thumb-border-pressed` | `#adadad` | 按下滚动条滑块的边框颜色。 | ![canvas-scroll-thumb-border-pressed](/assets/images/editor/themes/canvas-scroll-thumb-border-pressed.png) |
| `canvas-scroll-arrow` | `#adadad` | 滚动条箭头颜色。 | ![canvas-scroll-arrow](/assets/images/editor/themes/canvas-scroll-arrow.png) |
| `canvas-scroll-arrow-hover` | `#f1f1f1` | 悬停时滚动条箭头颜色。 | ![canvas-scroll-arrow-hover](/assets/images/editor/themes/canvas-scroll-arrow-hover.png) |
| `canvas-scroll-arrow-pressed` | `#f1f1f1` | 按下滚动条箭头的颜色。 | ![canvas-scroll-arrow-pressed](/assets/images/editor/themes/canvas-scroll-arrow-pressed.png) |
| `canvas-scroll-thumb-target` | `#cfcfcf` | 滚动条滑块的目标颜色。 | ![canvas-scroll-thumb-target](/assets/images/editor/themes/canvas-scroll-thumb-target.png) |
| `canvas-scroll-thumb-target-hover` | `#f1f1f1` | 悬停时滚动条滑块的目标颜色。 | ![canvas-scroll-thumb-target-hover](/assets/images/editor/themes/canvas-scroll-thumb-target-hover.png) |
| `canvas-scroll-thumb-target-pressed` | `#f1f1f1` | 按下滚动条滑块的目标颜色。 | ![canvas-scroll-thumb-target-pressed](/assets/images/editor/themes/canvas-scroll-thumb-target-pressed.png) |
| `canvas-sheet-view-cell-background` | `#73bf91` | 工作表视图模式下单元格的背景颜色。 | ![canvas-sheet-view-cell-background](/assets/images/editor/themes/canvas-sheet-view-cell-background.png) |
| `canvas-sheet-view-cell-background-hover` | `#97e3b6` | 悬停时工作表视图模式下单元格的背景颜色。 | ![canvas-sheet-view-cell-background-hover](/assets/images/editor/themes/canvas-sheet-view-cell-background-hover.png) |
| `canvas-sheet-view-cell-background-pressed` | `#aaffcc` | 按下时工作表视图模式下单元格的背景颜色。 | ![canvas-sheet-view-cell-background-pressed](/assets/images/editor/themes/canvas-sheet-view-cell-background-pressed.png) |
| `canvas-sheet-view-cell-title-label` | `#121212` | 工作表视图模式下单元格的文本颜色。 | ![canvas-sheet-view-cell-title-label](/assets/images/editor/themes/canvas-sheet-view-cell-title-label.png) |
| `canvas-sheet-view-select-all-icon` | `#3d664e` | 工作表视图模式下全选单元格图标的颜色。 | ![canvas-sheet-view-select-all-icon](/assets/images/editor/themes/canvas-sheet-view-select-all-icon.png) |
| `canvas-freeze-line-1px` | `#818181` | 带阴影的冻结线颜色。 | ![canvas-freeze-line-1px](/assets/images/editor/themes/canvas-freeze-line-1px.png) |
| `canvas-freeze-line-2px` | `#aaaaaa` | 不带阴影的冻结线颜色。 | ![canvas-freeze-line-2px](/assets/images/editor/themes/canvas-freeze-line-2px.png) |
| `canvas-select-all-icon` | `#82878f` | 全选单元格图标的颜色。 | ![canvas-select-all-icon](/assets/images/editor/themes/canvas-select-all-icon.png) |

## 完整示例

```json
{
  "name": "Amazing theme",
  "l10n": {
    "fr": "Thème incroyable",
    "de": "Geweldig thema"
  },
  "id": "theme-amazing",
  "type": "light",
  "colors": {
    "toolbar-header-document": "#446995",
    "toolbar-header-spreadsheet": "#40865c",
    "toolbar-header-presentation": "#BE664F",
    "toolbar-header-pdf": "#AA5252",
    "text-toolbar-header-on-background-document": "#38567A",
    "text-toolbar-header-on-background-spreadsheet": "#336B49",
    "text-toolbar-header-on-background-presentation": "#854535",
    "text-toolbar-header-on-background-pdf": "#8D4444",

    "background-normal": "#fff",
    "background-toolbar": "#f7f7f7",
    "background-toolbar-additional": "#efefef",
    "background-primary-dialog-button": "#444",
    "background-accent-button": "#446995",
    "background-tab-underline": "#444",
    "background-notification-popover": "#fcfed7",
    "background-notification-badge": "#ffd112",
    "background-scrim": "rgba(0, 0, 0, 0.2)",
    "background-loader": "rgba(24, 24, 24, 0.9)",
    "background-alt-key-hint": "#FFD938",
    "background-contrast-popover": "#fff",
    "background-fill-button": "#FFD112",
    "shadow-contrast-popover": "rgba(0, 0, 0, 0.3)",

    "highlight-button-hover": "#e0e0e0",
    "highlight-button-pressed": "#cbcbcb",
    "highlight-button-pressed-hover": "#bababa",
    "highlight-primary-dialog-button-hover": "#1c1c1c",
    "highlight-accent-button-hover": "#375478",
    "highlight-accent-button-pressed": "#293f59",
    "highlight-header-button-hover": "rgba(255, 255, 255, 0.15)",
    "highlight-header-button-pressed": "rgba(255, 255, 255, 0.25)",
    "highlight-toolbar-tab-underline": "#444",
    "highlight-text-select": "#3494fb",
    "highlight-fill-button-hover": "#FFE165",
    "highlight-fill-button-pressed": "#DFB500",

    "border-toolbar": "#cbcbcb",
    "border-toolbar-active-panel-top": "#f7f7f7",
    "border-divider": "#dfdfdf",
    "border-regular-control": "#c0c0c0",
    "border-toolbar-button-hover": "#e0e0e0",
    "border-preview-hover": "#bababa",
    "border-preview-select": "#888",
    "border-control-focus": "#848484",
    "border-color-shading": "rgba(0, 0, 0, 0.15)",
    "border-error": "#f62211",
    "border-contrast-popover": "#fff",
    "border-button-pressed-focus": "#848484",

    "text-normal": "rgba(0, 0, 0, 0.8)",
    "text-normal-pressed": "rgba(0, 0, 0, 0.8)",
    "text-secondary": "rgba(0, 0, 0, 0.6)",
    "text-tertiary": "rgba(0, 0, 0, 0.4)",
    "text-link": "#445799",
    "text-link-hover": "#445799",
    "text-link-active": "#445799",
    "text-link-visited": "#445799",
    "text-inverse": "#fff",
    "text-toolbar-header": "#fff",
    "text-contrast-background": "#fff",
    "text-alt-key-hint": "rgba(0, 0, 0, 0.8)",

    "icon-normal": "#444",
    "icon-normal-pressed": "#444",
    "icon-inverse": "#fff",
    "icon-toolbar-header": "#fff",
    "icon-notification-badge": "#000",
    "icon-contrast-popover": "#fff",
    "icon-success": "#090",

    "canvas-background": "#eee",
    "canvas-content-background": "#fff",
    "canvas-page-border": "#ccc",
    "canvas-ruler-background": "#fff",
    "canvas-ruler-border": "#cbcbcb",
    "canvas-ruler-margins-background": "#d9d9d9",
    "canvas-ruler-mark": "#555",
    "canvas-ruler-handle-border": "#555",
    "canvas-ruler-handle-border-disabled": "#aaa",
    "canvas-high-contrast": "#000",
    "canvas-high-contrast-disabled": "#666",
    "canvas-cell-border": "rgba(0, 0, 0, 0.1)",
    "canvas-cell-title-text": "#444",
    "canvas-cell-title-background": "#f7f7f7",
    "canvas-cell-title-background-hover": "#dfdfdf",
    "canvas-cell-title-background-selected": "#cfcfcf",
    "canvas-cell-title-border": "#d8d8d8",
    "canvas-cell-title-border-hover": "#c9c9c9",
    "canvas-cell-title-border-selected": "#bbb",
    "canvas-scroll-thumb": "#f1f1f1",
    "canvas-scroll-thumb-hover": "#cfcfcf",
    "canvas-scroll-thumb-pressed": "#adadad",
    "canvas-scroll-thumb-border": "#cfcfcf",
    "canvas-scroll-thumb-border-hover": "#cfcfcf",
    "canvas-scroll-thumb-border-pressed": "#adadad",
    "canvas-scroll-arrow": "#adadad",
    "canvas-scroll-arrow-hover": "#f1f1f1",
    "canvas-scroll-arrow-pressed": "#f1f1f1",
    "canvas-scroll-thumb-target": "#cfcfcf",
    "canvas-scroll-thumb-target-hover": "#f1f1f1",
    "canvas-scroll-thumb-target-pressed": "#f1f1f1",
    "canvas-sheet-view-cell-background": "#73bf91",
    "canvas-sheet-view-cell-background-hover": "#97e3b6",
    "canvas-sheet-view-cell-background-pressed": "#aaffcc",
    "canvas-sheet-view-cell-title-label": "#121212",
    "canvas-sheet-view-select-all-icon": "#3d664e",
    "canvas-freeze-line-1px": "#818181",
    "canvas-freeze-line-2px": "#aaaaaa",
    "canvas-select-all-icon": "#82878f"
  }
}
```
