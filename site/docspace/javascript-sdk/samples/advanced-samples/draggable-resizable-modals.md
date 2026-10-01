---
description: Embed DocSpace in draggable and resizable modal windows.
tags: ["DocSpace", "Embed SDK", "Integration"]
---

# Draggable resizable modals

Embed DocSpace inside draggable and resizable modal windows built with Vite, React, TypeScript, and Tailwind CSS.
This example shows how to embed multiple DocSpace instances, automatically log in via the SDK, and manage them dynamically.

Each modal starts in `system` mode, which is only used to log in: in this mode the frame shows a loader and nothing else. Once `login()` succeeds, the modal switches the frame to `manager` mode with `setConfig()`, and the DocSpace file manager appears.

## Before you start

The app runs on the Vite dev server at `http://localhost:5173`. [Add this origin](/docspace/javascript-sdk/get-started/authentication-security.md#registering-allowed-embed-origins) to the **Developer Tools** section of DocSpace.

## Script execution steps

### 1. Create the project

Create a new React + TypeScript project with [Vite](https://vite.dev/) and move into it:

``` sh
npm create vite@latest docspace-modals -- --template react-ts
cd docspace-modals
npm install
```

The current Vite template requires Node.js 20.19+ or 22.12+.

### 2. Prepare environment variables

Create a `.env` file in the project root:

``` bash
VITE_DOCSPACE_URL={PORTAL_SRC}
VITE_DOCSPACE_USER_LOGIN=user@example.com
VITE_DOCSPACE_USER_PASSWORD_HASH=PASTE_HASH_HERE
```

- `VITE_DOCSPACE_URL` - your DocSpace portal URL (root).
- `VITE_DOCSPACE_USER_LOGIN` - user login for authentication.
- `VITE_DOCSPACE_USER_PASSWORD_HASH` - password hash generated via the SDK (see the [Create password hash](../basic-samples/create-hash.md) sample).

:::warning
Vite embeds every `VITE_*` variable into the client bundle, so anyone who opens the page can read the password hash. Use this approach for local demos only. In production, get the credentials or a token on your backend.
:::

### 3. Install Tailwind CSS (v3) and configure PostCSS

1. Install Tailwind v3 with PostCSS:

``` bash
npm i -D tailwindcss@3.4.14 postcss@8 autoprefixer@10
```

2. Create `postcss.config.js` in the project root:

``` ts
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

3. Create `tailwind.config.js` in the project root:

``` ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

4. Replace `src/index.css` content (create the file if missing):

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root { height: 100%; margin: 0; }
```

### 4. Install the DocSpace SDK packages

Install the React wrapper and the core SDK:

``` bash
npm i @onlyoffice/docspace-react @onlyoffice/docspace-sdk-js
```
- `@onlyoffice/docspace-react` mounts the iframe, wires SDK events, and pulls in the core SDK at runtime.
- `@onlyoffice/docspace-sdk-js` is installed explicitly only to import the `SDKInstance` type. Without TypeScript, the React wrapper alone is enough.

### 5. Create the modal component

Add a reusable modal that embeds DocSpace, logs in on `onAppReady`, and then switches the frame to `manager` mode. The modal gets the SDK instance from the `onSetDocspaceInstance` prop of the `DocSpace` component. The config has no `src` because the component takes it from the `url` prop.

`src/components/DraggableModal.tsx`

<details>
  <summary>Create the modal component</summary>

``` tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { DocSpace } from "@onlyoffice/docspace-react";
import type { SDKInstance } from "@onlyoffice/docspace-sdk-js";

interface DraggableModalProps {
  id: string;
  title: string;
  zIndex: number;
  portalUrl: string;
  login: string;
  passwordHash: string;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
}

export default function DraggableModal({
  id, title, zIndex, portalUrl, login, passwordHash, onClose, onFocus,
}: DraggableModalProps) {
  const [pos, setPos] = useState({ x: 80, y: 80 });
  const [size, setSize] = useState({ width: 520, height: 380 });
  const [drag, setDrag] = useState<{ x: number; y: number } | null>(null);
  const [resize, setResize] = useState<{ x: number; y: number } | null>(null);
  const frameId = `frame-${id}`;
  const instance = useRef<SDKInstance | null>(null);

  // drag & resize
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (drag) {
        setPos(p => ({ x: p.x + (e.clientX - drag.x), y: p.y + (e.clientY - drag.y) }));
        setDrag({ x: e.clientX, y: e.clientY });
      }
      if (resize) {
        setSize(s => ({
          width: Math.max(320, s.width + (e.clientX - resize.x)),
          height: Math.max(200, s.height + (e.clientY - resize.y)),
        }));
        setResize({ x: e.clientX, y: e.clientY });
      }
    };
    const onUp = () => { setDrag(null); setResize(null); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [drag, resize]);

  // log in when the system frame is ready, then switch it to the file manager
  async function handleAppReady() {
    const ds = instance.current;
    if (!ds) return console.error(`[${id}] SDK instance not found`);
    try {
      await ds.login(login, passwordHash);
      await ds.setConfig({ mode: "manager" });
      console.log(`[${id}] login success`);
    } catch (e) {
      console.error(`[${id}] login failed`, e);
    }
  }

  // keep the config stable so dragging and resizing don't recreate the frame
  const config = useMemo(() => ({
    frameId,
    width: "100%",
    height: "100%",
    mode: "system",
    events: { onAppReady: handleAppReady },
  }), [frameId]);

  return (
    <div
      style={{ position: "fixed", top: pos.y, left: pos.x, width: size.width, height: size.height, zIndex }}
      className="bg-white border rounded-2xl shadow-lg overflow-hidden"
      onMouseDown={() => onFocus(id)}
    >
      <div
        className="flex items-center justify-between bg-[#2e66f5] text-white px-3 py-2 cursor-move"
        onMouseDown= {(e) => setDrag({ x: e.clientX, y: e.clientY })}
      >
        <span className="font-semibold text-sm">{title}</span>
        <button
          onClick={(e) => { e.stopPropagation(); onClose(id); }}
          className="px-2 py-1 rounded hover:bg-[#2556d2]"
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      <DocSpace
        url={portalUrl}
        config={config}
        onSetDocspaceInstance={(ds: SDKInstance) => { instance.current = ds; }}
      />

      <div
        className="absolute bottom-0 right-0 w-3 h-3 bg-gray-300 cursor-se-resize"
        onMouseDown={(e) => setResize({ x: e.clientX, y: e.clientY })}
        title="Resize"
      />
    </div>
  );
}
```

</details>

### 6. Render multiple modals

Create a page that opens, focuses, and closes DocSpace windows.

`src/pages/Modals/index.tsx`

<details>
  <summary>Render multiple modals</summary>

``` tsx
import { useState } from "react";
import DraggableModal from "../../components/DraggableModal";

type Win = { id: string; z: number };

export default function ModalsPage() {
  const portal = import.meta.env.VITE_DOCSPACE_URL || "";
  const login = import.meta.env.VITE_DOCSPACE_USER_LOGIN || "";
  const passwordHash = import.meta.env.VITE_DOCSPACE_USER_PASSWORD_HASH || "";
  const [wins, setWins] = useState<Win[]>([{ id: crypto.randomUUID(), z: 10 }]);

  function addWin() {
    setWins(prev => [...prev, { id: crypto.randomUUID(), z: (prev.at(-1)?.z ?? 10) + 1 }]);
  }

  function closeWin(id: string) {
    setWins(prev => prev.filter(w => w.id !== id));
  }

  function focusWin(id: string) {
    const maxZ = Math.max(...wins.map(w => w.z), 10);
    setWins(prev => prev.map(w => (w.id === id ? { ...w, z: maxZ + 1 } : w)));
  }

  return (
    <div className="min-h-screen bg-[#f2f4f7] relative">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">DocSpace Modals</h1>
            <p className="text-gray-500 text-sm">Draggable & resizable windows with embedded DocSpace.</p>
          </div>
          <div className="flex items-center gap-2">
            {portal ? (
              <a href={portal} target="_blank" rel="noreferrer" className="px-3 py-1.5 rounded bg-[#2e66f5] text-white text-sm">
                Open DocSpace
              </a>
            ) : (
              <span className="text-xs text-red-600">Set VITE_DOCSPACE_URL in .env</span>
            )}
            <button onClick={addWin} className="px-3 py-1.5 rounded bg-emerald-600 text-white text-sm">
              New Window
            </button>
          </div>
        </div>
      </header>

      <main className="relative min-h-[calc(100vh-56px)]">
        {wins.map((w, i) => (
          <DraggableModal
            key={w.id}
            id={w.id}
            title={`DocSpace #${i + 1}`}
            zIndex={w.z}
            portalUrl={portal}
            login={login}
            passwordHash={passwordHash}
            onClose={closeWin}
            onFocus={focusWin}
          />
        ))}
      </main>
    </div>
  );
}
```

</details>

### 7. Wire the entry point

Replace `src/App.tsx`:

``` tsx
import ModalsPage from "./pages/Modals";

export default function App() {
  return <ModalsPage />;
}
```

Make sure `src/main.tsx` imports `./index.css` (the Vite template does this by default).

### 8. Run the app

Start the dev server:

``` bash
npm run dev
```

Open `http://localhost:5173`. You should see a modal with DocSpace. Drag it by the header and resize from the bottom-right. Click New Window to open another modal.
