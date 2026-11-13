---
sidebar_position: 1
hide_table_of_contents: true
description: 在对话框中打开编辑器，用户可以拖动对话框的边框来移动和调整其大小，并使用编辑器自身的按钮将其关闭。
tags: ["Docs", "Integration"]
---

import { DialogEditor } from '@site/src/components/BrowserWindow';

# 在对话框中打开编辑器

在页面上方的对话框中打开编辑器，用户无需离开当前页面即可编辑文件。用户可以拖动边框的上边缘移动对话框，拖动其他边缘和角调整对话框的大小，并使用编辑器中的关闭按钮将其关闭。

:::info
编辑器运行在来自文档服务器的 iframe 中，因此编辑器上的指针事件永远不会到达您的页面。编辑器周围的细边框属于您的页面，因此可以用它来移动对话框和调整其大小。
:::

<DialogEditor/>

## 它是如何运作的

1. 对话框是一个 `<dialog>` 元素，包含编辑器的占位元素，以及边框每条边和每个角上的控制柄。上边缘是一个按钮，因此用户也可以通过键盘访问它：

   ``` html
   <dialog id="editorDialog">
     <div id="editorContainer"></div>
     <button class="handle" data-edge="top" type="button" aria-label="Move or resize the dialog"></button>
     <div class="handle" data-edge="right"></div>
     <div class="handle" data-edge="bottom"></div>
     <div class="handle" data-edge="left"></div>
     <div class="handle" data-edge="top-left"></div>
     <div class="handle" data-edge="top-right"></div>
     <div class="handle" data-edge="bottom-left"></div>
     <div class="handle" data-edge="bottom-right"></div>
   </dialog>
   ```

2. 用户打开对话框时，编辑器会在对话框中创建：

   - [close](../usage-api/config/editor/customization/customization-standard-branding.md#close) 参数和 [onRequestClose](../usage-api/config/events.md#onrequestclose) 事件会在编辑器中显示关闭按钮。只有同时设置这两项时才会显示该按钮。如果文件有未保存的更改，编辑器会在调用 `onRequestClose` 之前提醒用户。
   - [compactHeader](../usage-api/config/editor/customization/customization-standard-branding.md#compactheader) 参数会将标题栏按钮（包括关闭按钮）移到工具栏行，使编辑器占用更少的空间。
   - 将 `width` 和 `height` 设为 `100%`，编辑器就会随对话框的大小变化。
   - 对话框在打开之前设置大小和位置。编辑器的高度取自对话框，因此对话框的高度不能取自编辑器。

   ``` ts
   const dialog = document.getElementById("editorDialog");
   let docEditor;
   let editorReady = false;

   function openEditor(config) {
     const placeholder = document.createElement("div");
     placeholder.id = "placeholder";
     document.getElementById("editorContainer").replaceChildren(placeholder);

     docEditor = new DocsAPI.DocEditor("placeholder", {
       ...config,
       editorConfig: {
         ...config.editorConfig,
         customization: {
           ...config.editorConfig?.customization,
           close: { visible: true, text: "Close" },
           compactHeader: true,
         },
       },
       events: {
         ...config.events,
         onAppReady: () => {
           editorReady = true;
         },
         onRequestClose: () => dialog.close(),
       },
       width: "100%",
       height: "100%",
     });

     const width = Math.min(1100, window.innerWidth - 32);
     const height = Math.min(720, window.innerHeight - 32);
     Object.assign(dialog.style, {
       left: `${(window.innerWidth - width) / 2}px`,
       top: `${(window.innerHeight - height) / 2}px`,
       width: `${width}px`,
       height: `${height}px`,
     });
     dialog.showModal();
   }
   ```

3. 用户拖动控制柄。指针被捕获到控制柄上。上边缘会改变对话框的位置，其他控制柄则沿各自的方向改变对话框的大小：

   ``` ts
   const directions = {
     "right": { x: 1, y: 0 },
     "bottom": { x: 0, y: 1 },
     "left": { x: -1, y: 0 },
     "top-left": { x: -1, y: -1 },
     "top-right": { x: 1, y: -1 },
     "bottom-left": { x: -1, y: 1 },
     "bottom-right": { x: 1, y: 1 },
   };
   let start = null;

   for (const handle of dialog.querySelectorAll(".handle")) {
     handle.addEventListener("pointerdown", (e) => {
       if (e.button !== 0) return;
       handle.setPointerCapture(e.pointerId);
       const { left, top, width, height } = dialog.getBoundingClientRect();
       start = { x: e.clientX, y: e.clientY, left, top, width, height, direction: directions[handle.dataset.edge] };
       dialog.classList.add("dragging");
     });

     handle.addEventListener("pointermove", (e) => {
       if (!start) return;
       const dx = e.clientX - start.x;
       const dy = e.clientY - start.y;
       let { left, top, width, height, direction } = start;

       if (!direction) {
         left += dx;
         top += dy;
       } else {
         if (direction.x) width = Math.max(480, start.width + direction.x * dx);
         if (direction.x < 0) left = start.left + start.width - width;
         if (direction.y) height = Math.max(320, start.height + direction.y * dy);
         if (direction.y < 0) top = start.top + start.height - height;
       }

       Object.assign(dialog.style, {
         left: `${left}px`,
         top: `${top}px`,
         width: `${width}px`,
         height: `${height}px`,
       });
     });

     const stopDragging = () => {
       start = null;
       dialog.classList.remove("dragging");
     };
     handle.addEventListener("pointerup", stopDragging);
     handle.addEventListener("pointercancel", stopDragging);
   }
   ```

   请在原位置移动对话框和调整其大小，不要将其移到另一个元素中。在 DOM 中移动 iframe 时，浏览器会重新加载它，编辑器会再次打开文件。调整 iframe 的大小不会重新加载它。

4. 对话框的内边距就是边框。控制柄位于边框之上，并向外延伸几个像素，因此比细边框更容易点中。拖动控制柄时，iframe 会忽略指针。否则，每当光标移动得比对话框快时，iframe 就会接收指针事件，对话框随之停止跟随光标：

   ``` css
   #editorDialog {
     display: none;
     flex-direction: column;
     inset: auto;
     max-width: none;
     max-height: none;
     margin: 0;
     padding: 6px;
     overflow: visible;
   }

   #editorDialog[open] {
     display: flex;
   }

   .handle {
     position: absolute;
     padding: 0;
     touch-action: none;
     user-select: none;
     border: none;
     background: transparent;
   }

   .handle[data-edge="top"] {
     top: -4px;
     left: 12px;
     right: 12px;
     height: 10px;
     cursor: move;
   }

   .handle[data-edge="bottom-right"] {
     right: -4px;
     bottom: -4px;
     width: 16px;
     height: 16px;
     cursor: nwse-resize;
   }

   .dragging iframe {
     pointer-events: none;
   }
   ```

   其他边缘和角的定位方式相同，分别使用 `ns-resize`、`ew-resize`、`nesw-resize` 和 `nwse-resize` 光标。

   对话框的 `display` 仅在其打开时设置。为关闭的 `<dialog>` 设置 `display` 会覆盖浏览器的 `display: none`，使对话框显示在页面上。`max-width` 和 `max-height` 取消了浏览器对模态对话框大小的限制，因此用户可以将其调整到整个窗口的大小。

5. Esc 键会直接关闭模态对话框，而不经过编辑器，因此编辑器无法提醒用户有未保存的更改。请取消 `cancel` 事件，改为调用 [requestClose](../usage-api/methods.md#requestclose) 方法。如果文件有未保存的更改，编辑器会提醒用户，然后调用 `onRequestClose`。在编辑器就绪之前，Esc 键会直接关闭对话框。只有焦点位于您的页面上（例如上边缘）而不在编辑器中时，Esc 键才会到达对话框。

   关闭对话框时，[destroyEditor](../usage-api/methods.md#destroyeditor) 方法会移除编辑器：

   ``` ts
   dialog.addEventListener("cancel", (e) => {
     if (!editorReady) return;
     e.preventDefault();
     docEditor.requestClose();
   });

   dialog.addEventListener("close", () => {
     docEditor.destroyEditor();
     editorReady = false;
   });
   ```

   如果编辑器加载失败，它就没有关闭按钮。在这种情况下，请显示您自己的关闭按钮，例如，通过 [onError](../usage-api/config/events.md#onerror) 事件，如上面的示例所示。

:::tip
拖动只能通过指针完成。请同时允许用户使用键盘移动对话框和调整其大小，例如，在上边缘获得焦点时使用方向键和 Shift 加方向键，如上面的示例所示。
:::
