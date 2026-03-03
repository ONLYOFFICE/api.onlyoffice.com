# Open document for filling

This example opens a document in fill mode (`action=fill`) using a generated DocSpace link or via the SDK editor.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/open-document-for-filling.html)

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <base href="{PORTAL_SRC}/" />
    <meta charset="UTF-8" />

    <meta name="example-title" content="Open Document for Filling" />
    <meta
      name="example-description"
      content="Pick a file and open it in fill mode (action=fill) in a new tab. Optionally open the same file via initEditor."
    />
    <meta name="example-group" content="advanced" />

    <title>Open Document for Filling</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>

    <script>
      (function () {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = new URL("../assets/css/style.css", window.location.href).toString();
        document.head.appendChild(link);
      })();
    </script>
  </head>

  <body class="ex-open-document-for-filling">
    <div class="wrap">
      <iframe id="ds-frame" class="frame"></iframe>
    </div>

    <div class="panel">
      <div class="row">
        <div class="kv">
          <div class="k">Selected</div>
          <div class="v" id="selectedTitle">None</div>
        </div>
        <div class="kv">
          <div class="k">File ID</div>
          <div class="v" id="selectedId">-</div>
        </div>
      </div>

      <label for="fillUrl">Fill link</label>
      <div class="linkRow">
        <input id="fillUrl" type="text" placeholder="Select a file or paste a public link" autocomplete="off" />
        <button id="copyLink" type="button" class="btn-secondary" disabled>Copy</button>
      </div>
      <div class="muted">
        Tip: for DocSpace public links, this sample adds <code>action=fill</code>. For portal links, it uses
        <code>/doceditor?fileId=...&amp;action=fill</code>.
      </div>

      <label for="payload">Selection payload</label>
      <textarea id="payload" readonly placeholder="Pick a file to see payload..."></textarea>
    </div>

    <div class="bar">
      <button id="pick" type="button">Pick file</button>
      <button id="openFill" type="button" disabled>Open to fill</button>
      <button id="openEmbed" type="button" class="btn-secondary" disabled>Open in SDK editor</button>
      <div class="hint" id="hint">Select a file to enable actions</div>
    </div>

    <script>
      const hint = document.getElementById("hint");
      const pick = document.getElementById("pick");
      const openFill = document.getElementById("openFill");
      const openEmbed = document.getElementById("openEmbed");

      const selectedTitle = document.getElementById("selectedTitle");
      const selectedId = document.getElementById("selectedId");

      const fillUrlEl = document.getElementById("fillUrl");
      const copyLinkBtn = document.getElementById("copyLink");
      const payloadEl = document.getElementById("payload");

      let selectorOrEditor = null;
      let selected = null; // { id, title, raw }

      function destroyCurrent() {
        if (selectorOrEditor && typeof selectorOrEditor.destroyFrame === "function") {
          try {
            selectorOrEditor.destroyFrame();
          } catch {}
        }
        selectorOrEditor = null;
      }

      function portalDocEditorUrl(fileId) {
        const url = new URL("doceditor?fileId=" + encodeURIComponent(String(fileId)), document.baseURI);
        url.searchParams.set("action", "fill");
        return url.toString();
      }

      function withFillAction(rawUrl) {
        const raw = String(rawUrl || "").trim();
        if (!raw) return "";
        try {
          const parsed = new URL(raw, document.baseURI);
          parsed.searchParams.set("action", "fill");
          return parsed.toString();
        } catch {
          return raw.includes("?") ? `${raw}&action=fill` : `${raw}?action=fill`;
        }
      }

      function computeFillUrl() {
        const pasted = String(fillUrlEl.value || "").trim();
        if (pasted) return withFillAction(pasted);
        if (selected?.id) return portalDocEditorUrl(selected.id);
        return "";
      }

      function updateUi() {
        selectedTitle.textContent = selected?.title || "None";
        selectedId.textContent = selected?.id ? String(selected.id) : "-";

        const url = computeFillUrl();
        copyLinkBtn.disabled = !url;
        openFill.disabled = !url;
        openEmbed.disabled = !selected?.id;

        hint.textContent = selected?.id
          ? "Ready"
          : "Select a file to enable actions";
      }

      async function copyToClipboard(text) {
        try {
          await navigator.clipboard.writeText(text);
          hint.textContent = "Copied";
          setTimeout(() => updateUi(), 900);
        } catch {
          hint.textContent = "Copy failed";
          setTimeout(() => updateUi(), 900);
        }
      }

      function openSelector() {
        destroyCurrent();
        hint.textContent = "Select a file...";

        selectorOrEditor = DocSpace.SDK.initFileSelector({
          frameId: "ds-frame",
          width: "900px",
          height: "520px",
          theme: "base",
          events: {
            onSelectCallback: (e) => {
              const item = Array.isArray(e) ? e[0] : e;
              if (!item) return;

              const id = item?.id ?? item?.fileId ?? null;
              const title = item?.title || item?.name || (id ? `File ${id}` : "File");

              selected = { id: id ? String(id) : "", title: String(title), raw: item };
              payloadEl.value = JSON.stringify(item, null, 2);

              if (selected.id) fillUrlEl.value = portalDocEditorUrl(selected.id);
              updateUi();
            },
            onAppError: (e) => {
              console.error("Selector error", e);
              hint.textContent = "Error";
            }
          }
        });
      }

      function openEditorEmbedded() {
        if (!selected?.id) return;
        destroyCurrent();
        hint.textContent = "Opening editor...";

        selectorOrEditor = DocSpace.SDK.initEditor({
          id: selected.id,
          frameId: "ds-frame",
          width: "900px",
          height: "520px",
          theme: "base",
          events: {
            onAppReady: () => {
              hint.textContent = "Ready";
            },
            onAppError: (e) => {
              console.error("Editor error", e);
              hint.textContent = "Error";
            }
          }
        });
      }

      pick.onclick = openSelector;
      openEmbed.onclick = openEditorEmbedded;

      openFill.onclick = () => {
        const url = computeFillUrl();
        if (!url) return;
        window.open(url, "_blank", "noopener,noreferrer");
      };

      copyLinkBtn.onclick = () => {
        const url = computeFillUrl();
        if (!url) return;
        copyToClipboard(url);
      };

      fillUrlEl.addEventListener("input", updateUi);

      openSelector();
      updateUi();
    </script>
  </body>
</html>
```

</details>

## Script execution steps

### 1. Set HTML structure

Create an HTML file. It must include the file selector iframe and the controls for the fill link:

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
  </head>
  <body>
    <iframe id="ds-frame"></iframe>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.1.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

### 2. Initialize the file selector

Add a script to initialize the [file selector](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initfileselector).

1. Add an event handler for [onSelectCallback](/docspace/javascript-sdk/usage-sdk/type-aliases/TFrameEvents.md#onselectcallback) and save the selected file ID.
2. Build the fill URL with `action=fill`.

### 3. Open document in fill mode

Open the fill link in a new browser tab:

``` ts
const url = computeFillUrl()
window.open(url, "_blank", "noopener,noreferrer")
```

### 4. (Optional) Open in the SDK editor

Open the selected file in the embedded editor using [initEditor](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initeditor):

``` ts
DocSpace.SDK.initEditor({
  id: selected.id,
  frameId: "ds-frame",
  width: "900px",
  height: "520px",
})
```

### 5. Run the sample

Run the HTML file and make sure everything works.
