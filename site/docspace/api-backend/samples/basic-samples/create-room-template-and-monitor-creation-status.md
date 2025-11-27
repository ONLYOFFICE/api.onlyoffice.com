import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a room template and monitor creation status

This example demonstrates how to create a room template from an existing room in ONLYOFFICE DocSpace using the API and then check the template creation status. You can use this flow to implement a “Save this room as template” button in an admin panel or to prepare reusable project, onboarding, or deal room templates.

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
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // Step 1: Create a room template from an existing room
  async function createRoomTemplate(roomId: number, templateTitle?: string) {
    const url = `${BASE_URL}/api/2.0/files/roomtemplate`;

    const body = {
      roomId,
      title: templateTitle,
      logo: {
        copyLogo: true,
      },
      public: true,
      tags: ['project', 'template'],
      // Example quota, adjust as needed (bytes)
      quota: 1073741824,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Create room template failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const status = json.response ?? json;
    console.log('Room template creation started:', status);
    return status;
  }

  // Step 2: Get room template creation status
  async function getRoomTemplateStatus() {
    const url = `${BASE_URL}/api/2.0/files/roomtemplate/status`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Get room template status failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const status = json.response ?? json;
    return status;
  }

  // Example usage: create template and monitor status (simple polling)
  (async () => {
    const sourceRoomId = 1234; // Replace with an existing room ID
    const templateTitle = 'Project Room Template';

    const initialStatus = await createRoomTemplate(sourceRoomId, templateTitle);
    if (!initialStatus) {
      return;
    }

    // Simple polling loop (optional)
    for (let attempt = 1; attempt <= 5; attempt++) {
      console.log(`\nStatus check ${attempt}/5`);

      const status = await getRoomTemplateStatus();
      if (!status) {
        break;
      }

      console.log('Current status:', status);

      if (status.isCompleted) {
        console.log('Room template creation completed.');
        console.log('Template ID:', status.templateId);
        break;
      }

      // Wait a few seconds before the next check
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  })().catch((e) => {
    console.error(e);
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import time
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

  # Step 1: Create a room template from an existing room
  def create_room_template(room_id, template_title=None):
    url = f"{BASE_URL}/api/2.0/files/roomtemplate"

    data = {
      "roomId": room_id,
      "title": template_title,
      "logo": {
        "copyLogo": True,
      },
      "public": True,
      "tags": ["project", "template"],
      # Example quota value, adjust as needed
      "quota": 1073741824,
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      status = payload.get("response", payload)
      print("Room template creation started:", status)
      return status

    print(
        "Failed to create room template:",
        response.status_code,
        response.text,
    )
    return None

  # Step 2: Get room template creation status
  def get_room_template_status():
    url = f"{BASE_URL}/api/2.0/files/roomtemplate/status"

    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      status = payload.get("response", payload)
      return status

    print(
        "Failed to get room template status:",
        response.status_code,
        response.text,
    )
    return None

  if __name__ == "__main__":
    source_room_id = 1234  # Replace with an existing room ID
    template_title = "Project Room Template"

    initial_status = create_room_template(source_room_id, template_title)
    if not initial_status:
      exit(1)

    # Simple polling loop (optional)
    for attempt in range(1, 6):
      print(f"\nStatus check {attempt}/5")
      status = get_room_template_status()
      if status is None:
        break

      print("Current status:", status)

      if status.get("isCompleted"):
        print("Room template creation completed.")
        print("Template ID:", status.get("templateId"))
        break

      time.sleep(5)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create a room template

A POST request is sent to [/api/2.0/files/roomtemplate](/docspace/api-backend/usage-api/create-room-template) to start creating a room template based on an existing room.

The request body includes at minimum:

- `roomId` (required): ID of the room to use as a base for the template.
- `title` (optional): template title shown in the interface.

You can also configure additional properties, for example:
- `logo.copyLogo`: whether to copy the room logo to the template.
- `share`: list of user email addresses to share the template with.
- `groups`: list of group IDs to share the template with.
- `public`: whether the template is public.
- `tags`: list of tags for easier discovery.
- `color and cover`: visual appearance of the template.
- `quota`: room quota for rooms created from this template.

The response contains the template creation status, including:

- `templateId`: room template ID.
- `progress`: numeric progress value.
- `isCompleted`: whether template creation has finished.
- `error`: error message if the process fails.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createRoomTemplate(roomId: number, templateTitle?: string) {
    const url = `${BASE_URL}/api/2.0/files/roomtemplate`;

    const body = {
      roomId,
      title: templateTitle,
      logo: {
        copyLogo: true,
      },
      public: true,
      tags: ['project', 'template'],
      // Example quota, adjust as needed (bytes)
      quota: 1073741824,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Create room template failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const status = json.response ?? json;
    console.log('Room template creation started:', status);
    return status;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_room_template(room_id, template_title=None):
    url = f"{BASE_URL}/api/2.0/files/roomtemplate"

    data = {
      "roomId": room_id,
      "title": template_title,
      "logo": {
        "copyLogo": True,
      },
      "public": True,
      "tags": ["project", "template"],
      # Example quota value, adjust as needed
      "quota": 1073741824,
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      status = payload.get("response", payload)
      print("Room template creation started:", status)
      return status

    print(
        "Failed to create room template:",
        response.status_code,
        response.text,
    )
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Check room template creation status

A GET request is sent to [/api/2.0/files/roomtemplate/status](/docspace/api-backend/usage-api/get-room-template-creating-status) to retrieve the current status of the room template creation process.

The response has the same structure as in Step 1 and includes:

- `templateId`: ID of the template being created.
- `progress`: current progress.
- `isCompleted`: true when the template is ready.
- `error`: error message if the creation failed.

You can call this endpoint periodically (for example, every few seconds) until isCompleted becomes true, and then use templateId to work with the created template.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRoomTemplateStatus() {
    const url = `${BASE_URL}/api/2.0/files/roomtemplate/status`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Get room template status failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const status = json.response ?? json;
    return status;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_room_template_status():
    url = f"{BASE_URL}/api/2.0/files/roomtemplate/status"

    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      status = payload.get("response", payload)
      return status

    print(
        "Failed to get room template status:",
        response.status_code,
        response.text,
    )
    return None
  ```

  </TabItem>
</Tabs>
