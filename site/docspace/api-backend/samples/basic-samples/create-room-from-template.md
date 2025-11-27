import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a room from a template

This example demonstrates how to create a new room in ONLYOFFICE DocSpace from an existing room template using the API. You can use this flow to automatically create standard project rooms, onboarding rooms, or deal rooms based on predefined templates.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Set API base URL
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: API_KEY, // if you use PAT directly
    // Authorization: `Bearer ${API_KEY}`, // use this if API_KEY is a JWT
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // Create a room from a template
  async function createRoomFromTemplate(
    templateId: number,
    roomTitle: string,
  ) {
    /**
     * POST /api/2.0/files/rooms/fromtemplate
     */
    const url = `${BASE_URL}/api/2.0/files/rooms/fromtemplate`;

    const body = {
      templateId,
      title: roomTitle,
      logo: {
        copyLogo: true,
      },
      tags: ['project'],
      color: '00AEEF', // example hex color without '#'
      cover: 'default-cover',
      quota: 1073741824, // example quota in bytes
      indexing: true,
      denyDownload: false,
      private: false,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Create room from template failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    return json.response ?? json;
  }

  // Example usage
  (async () => {
    const templateId = 1234; // Replace with a real template ID
    const roomTitle = 'New Project Room';

    const room = await createRoomFromTemplate(templateId, roomTitle);
    console.log('Created room from template:', room);
  })().catch((e) => {
    console.error(e);
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
  }

  # Create a room from a template
  def create_room_from_template(template_id, room_title):
    url = f"{BASE_URL}/api/2.0/files/rooms/fromtemplate"

    data = {
      "templateId": template_id,
      "title": room_title,
      "logo": {
        "copyLogo": True,
      },
      "tags": ["project"],
      "color": "00AEEF",          # example hex color without '#'
      "cover": "default-cover",   # example cover identifier
      "quota": 1073741824,        # example quota in bytes
      "indexing": True,
      "denyDownload": False,
      "private": False,
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      room_info = payload.get("response", payload)
      print("Room created from template:", room_info)
      return room_info

    print(
        "Failed to create room from template:",
        response.status_code,
        response.text,
    )
    return None

  if __name__ == "__main__":
    template_id = 1234        # Replace with a real template ID
    room_title = "New Project Room"

    create_room_from_template(template_id, room_title)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/files/rooms/fromtemplate](/docspace/api-backend/usage-api/create-room-from-template) to create a new room based on an existing room template.

The request body includes:

- `templateId`: ID of the room template to use.
- `title`: title of the new room.

Optional parameters let you customize the created room:

- `logo.copyLogo`: whether to copy the logo from the template.
- `tags`: list of tags to assign to the room.
- `color`: room color (hex color without #, up to 6 characters).
- `cover`: cover identifier for the room.
- `quota`: room quota (for example, in bytes).
- `indexing`: whether the room content is indexed.
- `denyDownload`: whether to deny downloads from the room.
- `private`: whether the room is private.

The API returns information about the created room, which you can use to display it in your UI or link it to other systems.