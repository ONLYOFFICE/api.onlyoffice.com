import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a virtual data room (VDR) with a watermark

This example demonstrates how to create a Virtual Data Room (VDR) in ONLYOFFICE DocSpace using the API. The room is created with a text watermark enabled, including dynamic elements such as `UserName` and `CurrentDate`.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Create a Virtual Data Room with a text watermark
  function createVdrRoom(roomTitle, roomDescription) {
    const url = `${API_HOST}/api/2.0/files/rooms`;
    const data = {
      title: roomTitle,
      description: roomDescription,
      roomType: 8, // VDR room
      watermark: {
        enabled: true,
        text: 'Confidential',
        rotate: -45,
        additions: 1, // Adds UserName
      },
    };

    return fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then((res) => (res.status === 200 ? res.json() : null))
      .catch(() => null);
  }

  // Run
  const roomTitle = 'Secure VDR Room';
  const roomDescription = 'A virtual room with a confidential watermark.';

  createVdrRoom(roomTitle, roomDescription);
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with API key for authentication
  HEADERS = {
    'Authorization': f'Bearer {API_KEY}'
  }

  # Step 1: Create a Virtual Data Room with a text watermark
  def create_vdr_room(room_title, room_description):
    url = f'{API_HOST}/api/2.0/files/rooms'
    data = {
      'title': room_title,
      'description': room_description,
      'roomType': 8,  # VDR room
      'watermark': {
        'enabled': True,
        'text': 'Confidential',
        'rotate': -45,
        'additions': 1  # Adds UserName
      }
    }

    response = requests.post(url, headers=HEADERS, json=data)

    if response.status_code == 200:
        return response.json()
    return None

  if __name__ == "__main__":
    room_title = 'Secure VDR Room'
    room_description = 'A virtual room with a confidential watermark.'

    create_vdr_room(room_title, room_description)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/files/rooms](/docspace/api-backend/usage-api/create-room) with:

- `roomType`: `8` indicating a Virtual Data Room (VDR).
- `watermark`: Object containing watermark configuration:
  - `enabled`: True — enable watermarking.
  - `text`: Main watermark text.
  - `rotate`: Rotation angle for the watermark.
  - `additions`: Set to `1` to include dynamic data like `UserName`.
