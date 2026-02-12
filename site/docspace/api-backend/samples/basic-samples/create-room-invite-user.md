import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a room and invite a user

This example demonstrates how to programmatically create a new room in ONLYOFFICE DocSpace and invite a user to it via email with specific access permissions.

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

  // Step 1: Create a new room
  function createRoom(title) {
    const url = `${API_HOST}/api/2.0/files/rooms`;
    const data = {
      title: title,
      roomType: 2, // Type 2 = collaboration room
    };

    return fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Room creation failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .then((json) => (json ? json.response?.id ?? null : null))
      .catch((err) => {
        console.log(`Room creation error: ${err.message}`);
        return null;
      });
  }

  // Step 2: Invite a user to the room
  function inviteUserToRoom(roomId, email, access) {
    const url = `${API_HOST}/api/2.0/files/rooms/${roomId}/share`;
    const data = {
      invitations: [
        {
          email: email,
          access: access,
        },
      ],
      notify: true,
      message: 'You have been invited to a room',
    };

    return fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.status === 200) {
          console.log(`User ${email} invited to room ${roomId} with access ${access}`);
        } else {
          const text = await res.text();
          console.log(`Invitation failed. Status code: ${res.status}, Message: ${text}`);
        }
      })
      .catch((err) => {
        console.log(`Invitation error: ${err.message}`);
      });
  }

  // Run
  const roomTitle = 'Project Collaboration';
  const userEmail = 'example.user@mail.com';
  const userAccess = 'Editing';

  createRoom(roomTitle).then((roomId) => {
    if (roomId) {
      inviteUserToRoom(roomId, userEmail, userAccess);
    }
  });
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
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }

  # Step 1: Create a new room
  def create_room(title):
    url = f'{API_HOST}/api/2.0/files/rooms'
    data = {
      'title': title,
      'roomType': 2  # Type 2 = collaboration room
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      room_id = response.json()['response']['id']
      return room_id
    else:
      print(f"Room creation failed. Status code: {response.status_code}, Message: {response.text}")
  return None

  # Step 2: Invite a user to the room
  def invite_user_to_room(room_id, email, access='ReadWrite'):
    url = f'{API_HOST}/api/2.0/files/rooms/{room_id}/share'
    data = {
      'invitations': [
        {
          'email': email,
          'access': access
        }
      ],
      'notify': True,
      'message': 'You have been invited to a room'
    }

    requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print(f"User {email} invited to room {room_id} with access {access}")
    else:
      print(f"Invitation failed. Status code: {response.status_code}, Message: {response.text}")

  if __name__ == "__main__":
    room_title = 'Project Collaboration'
    user_email = 'example.user@mail.com'
    user_access = 'Editing'

    room_id = create_room(room_title)

    if room_id:
      invite_user_to_room(room_id, user_email, user_access)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create a room

A POST request is sent to [/api/2.0/files/rooms](/docspace/api-backend/usage-api/create-room) with:

- `title`: The room name.
- `roomType`: The room type. Use 2 for collaboration rooms.

The API returns a unique `roomId` used in the next step.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function createRoom(title) {
    const url = `${API_HOST}/api/2.0/files/rooms`;
    const data = {
      title: title,
      roomType: 2, // Type 2 = collaboration room
    };

    return fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Room creation failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .then((json) => (json ? json.response?.id ?? null : null))
      .catch((err) => {
        console.log(`Room creation error: ${err.message}`);
        return null;
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_room(title):
    url = f'{API_HOST}/api/2.0/files/rooms'
    data = {
      'title': title,
      'roomType': 2  # Type 2 = collaboration room
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      room_id = response.json()['response']['id']
      return room_id
    else:
      print(f"Room creation failed. Status code: {response.status_code}, Message: {response.text}")
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Invite a user to the room

A PUT request is sent to [/api/2.0/files/rooms/:roomId/share](/docspace/api-backend/usage-api/set-room-security) with:

- `email`: The invitee's email address.
- `access`: Access level (e.g., ReadWrite, Editing, Read).
- `notify`: True — send an email notification to the invitee.
- `message`: Custom invitation message.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function inviteUserToRoom(roomId, email, access) {
    const url = `${API_HOST}/api/2.0/files/rooms/${roomId}/share`;
    const data = {
      invitations: [
        {
          email: email,
          access: access,
        },
      ],
      notify: true,
      message: 'You have been invited to a room',
    };

    return fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.status === 200) {
          console.log(`User ${email} invited to room ${roomId} with access ${access}`);
        } else {
          const text = await res.text();
          console.log(`Invitation failed. Status code: ${res.status}, Message: ${text}`);
        }
      })
      .catch((err) => {
        console.log(`Invitation error: ${err.message}`);
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def invite_user_to_room(room_id, email, access='ReadWrite'):
    url = f'{API_HOST}/api/2.0/files/rooms/{room_id}/share'
    data = {
      'invitations': [
        {
          'email': email,
          'access': access
        }
      ],
      'notify': True,
      'message': 'You have been invited to a room'
    }

    requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print(f"User {email} invited to room {room_id} with access {access}")
    else:
      print(f"Invitation failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>
