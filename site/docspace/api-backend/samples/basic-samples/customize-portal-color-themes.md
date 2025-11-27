import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Customize portal color themes

This example demonstrates how to view, create/update, and delete custom color themes in ONLYOFFICE DocSpace using the API.
Administrators can use this flow to define brand colors (accent, buttons, text) and choose which theme is currently applied to the portal.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to manage web plugins.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Configure API endpoint and access token
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Common headers with authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Step 1: Get all custom color themes and the selected one
  async function getColorThemes() {
    const url = `${BASE_URL}/api/2.0/settings/colortheme`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }

  // Step 2: Save or update a color theme and optionally select it
  async function saveColorTheme(theme: {
    id?: number;
    name: string;
    main: { accent?: string; buttons?: string };
    text: { accent?: string; buttons?: string };
    selected?: number | null;
  }) {
    const url = `${BASE_URL}/api/2.0/settings/colortheme`;

    const payload = { theme };

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }

  // Step 3: Delete a color theme by ID
  async function deleteColorTheme(id: number) {
    const url = `${BASE_URL}/api/2.0/settings/colortheme?id=${encodeURIComponent(
      id,
    )}`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }

  // Example usage
  (async () => {
    const themesInfo = await getColorThemes();
    if (!themesInfo) return;

    // Create or update a theme and make it selected
    const updated = await saveColorTheme({
      name: 'Brand blue',
      main: {
        accent: '#4781D1',
        buttons: '#5299E0',
      },
      text: {
        accent: '#1F2933',
        buttons: '#FFFFFF',
      },
      selected: 1, // ID to mark as selected, optional
    });

    // Delete a theme by ID (example)
    // await deleteColorTheme(3);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Configure API endpoint and access token
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Common headers with authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  # Step 1: Get all custom color themes and the selected one
  def get_color_themes():
    url = f"{BASE_URL}/api/2.0/settings/colortheme"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  # Step 2: Save or update a color theme and optionally select it
  def save_color_theme(theme: dict):
    url = f"{BASE_URL}/api/2.0/settings/colortheme"
    payload = {"theme": theme}

    response = requests.put(url, headers=HEADERS, json=payload)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  # Step 3: Delete a color theme by ID
  def delete_color_theme(theme_id: int):
    url = f"{BASE_URL}/api/2.0/settings/colortheme"
    params = {"id": theme_id}

    response = requests.delete(url, headers=HEADERS, params=params)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    themes_info = get_color_themes()

    new_theme = {
      "name": "Brand blue",
      "main": {"accent": "#4781D1", "buttons": "#5299E0"},
      "text": {"accent": "#1F2933", "buttons": "#FFFFFF"},
      "selected": 1,
    }

    updated_info = save_color_theme(new_theme)
    # delete_color_theme(3)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get available color themes

A GET request is sent to [/api/2.0/settings/colortheme](/docspace/api-backend/usage-api/get-portal-color-theme).

The response describes the current color theme configuration, including:

- `themes`: list of custom color themes:
  - `id`: theme ID.
  - `name`: theme name.
  - `main.accent`, `main.buttons`: main accent and button colors.
  - `text.accent`, `text.buttons`: text-related colors.
  - `selected`: ID of the currently selected theme.
  - `limit`: maximum number of custom themes.

Use this data to build a theme picker in the admin UI.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getColorThemes() {
    const url = `${BASE_URL}/api/2.0/settings/colortheme`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_color_themes():
    url = f"{BASE_URL}/api/2.0/settings/colortheme"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>

## Step 2: Save or update a color theme

A PUT request is sent to [/api/2.0/settings/colortheme](/docspace/api-backend/usage-api/save-portal-color-theme) with a body that includes a `theme` object:

- `id` — theme ID (for updating an existing theme; omit to create a new one if allowed).
- `name` — display name of the theme.
- `main.accent`, `main.buttons` — primary colors for UI elements.
- `text.accent`, `text.buttons` — text colors for accents and buttons.
- `selected` — optional value indicating which theme should be marked as selected.

The response returns the updated color themes configuration.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function saveColorTheme(theme: {
    id?: number;
    name: string;
    main: { accent?: string; buttons?: string };
    text: { accent?: string; buttons?: string };
    selected?: number | null;
  }) {
    const url = `${BASE_URL}/api/2.0/settings/colortheme`;

    const payload = { theme };

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def save_color_theme(theme: dict):
    url = f"{BASE_URL}/api/2.0/settings/colortheme"
    payload = {"theme": theme}

    response = requests.put(url, headers=HEADERS, json=payload)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>

## Step 3: Delete a color theme

A DELETE request is sent to [/api/2.0/settings/colortheme](/docspace/api-backend/usage-api/delete-portal-color-theme) with `id` as the theme ID to remove.

The response returns the updated color themes settings, including the remaining themes and the current `selected` theme.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function deleteColorTheme(id: number) {
    const url = `${BASE_URL}/api/2.0/settings/colortheme?id=${encodeURIComponent(
      id,
    )}`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_color_theme(theme_id: int):
    url = f"{BASE_URL}/api/2.0/settings/colortheme"
    params = {"id": theme_id}

    response = requests.delete(url, headers=HEADERS, params=params)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>