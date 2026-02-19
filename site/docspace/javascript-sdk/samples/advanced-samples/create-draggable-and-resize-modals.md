# Create Draggable and Resizable DocSpace Modals

Embed DocSpace inside draggable and resizable modal windows built with Create React App, TypeScript, and Tailwind CSS.
This example shows how to embed multiple DocSpace instances, automatically log in via the SDK, and manage them dynamically.

Complete source code on GitHub: [Source](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/create-draggable-and-resize-modals.html)

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

## Script execution steps

### 1. Create the project

Create a new React + TypeScript project and move into it:

``` sh
npx create-react-app docspace-modals --template typescript
cd docspace-modals
```

### 2. Prepare environment variables

Create a `.env` file in the project root:

``` bash
REACT_APP_DOCPSACE_URL=https://yourportal.onlyoffice.com
REACT_APP_DOCPSACE_USER_LOGIN=user@example.com
REACT_APP_DOCPSACE_USER_PASSWORD_HASH=PASTE_HASH_HERE
```

- `REACT_APP_DOCPSACE_URL` - your DocSpace portal URL (root).
- `REACT_APP_DOCPSACE_USER_LOGIN` - user login for authentication.
- `REACT_APP_DOCPSACE_USER_PASSWORD_HASH` - password hash generated via the SDK (see Create password hash sample).

### 3. Install Tailwind CSS (v3) and configure PostCSS

1. Install Tailwind v3 with PostCSS:

``` bash
npm i -D tailwindcss@3.4.14 postcss@8 autoprefixer@10
```

2. Create `postcss.config.js` in the project root:

``` ts
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

3. Create `tailwind.config.js` in the project root:

``` ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
npm i @onlyoffice/docspace-sdk-js @onlyoffice/docspace-react
```
- `@onlyoffice/docspace-react` mounts the iframe and wires SDK events.
- `@onlyoffice/docspace-sdk-js` provides methods such as `login()` (see Login, Get hash settings, Create hash samples for context).

### 5. Create the modal component

Add a reusable modal that embeds DocSpace and logs in on `onAppReady`.

`src/components/DraggableModal.tsx`

<details>
  <summary>Create the modal component</summary>

``` tsx
import React, { useEffect, useState } from "react";
import { DocSpace } from "@onlyoffice/docspace-react";

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

  // login when iframe is ready
  async function handleAppReady() {
    const ds = (window as any).DocSpace?.SDK?.frames?.[frameId];
    if (!ds) return console.error(`[${id}] SDK frame not found`);
    try {
      await ds.login(login, passwordHash);
      console.log(`[${id}] login success`);
    } catch (e) {
      console.error(`[${id}] login failed`, e);
    }
  }

  const config = {
    frameId,
    width: "100%",
    height: "100%",
    src: portalUrl,
    mode: "system",
    events: { onAppReady: handleAppReady },
  };

  return (
    <div
      style={{ position: "fixed", top: pos.y, left: pos.x, width: size.width, height: size.height, zIndex }}
      className="bg-white border rounded-2xl shadow-lg overflow-hidden"
      onMouseDown={() => onFocus(id)}
    />
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

      <DocSpace url={portalUrl} config={config} />

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
import React, { useState } from "react";
import DraggableModal from "../../components/DraggableModal";

type Win = { id: string; z: number };

export default function ModalsPage() {
  const portal = process.env.REACT_APP_DOCPSACE_URL || "";
  const login = process.env.REACT_APP_DOCPSACE_USER_LOGIN || "";
  const passwordHash = process.env.REACT_APP_DOCPSACE_USER_PASSWORD_HASH || "";
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
              <span className="text-xs text-red-600">Set REACT_APP_DOCPSACE_URL in .env</span>
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
import React from "react";
import ModalsPage from "./pages/Modals";

export default function App() {
  return <ModalsPage />;
}
```

Ensure `src/index.tsx` imports `./index.css` (default CRA does).

### 7. Run the app

Start the dev server:

``` bash
npm start
```

Open `http://localhost:3000`. You should see a modal with DocSpace. Drag it by the header and resize from the bottom-right. Click New Window to open another modal.
