When building web applications, developers can choose between **localStorage**, **sessionStorage**, and **cookies** to store client-side data. Each has its own characteristics, use cases, and differences in how they store data, persist it, and interact with the server.

### 1. **localStorage**

**localStorage** is a way to store key-value pairs in the browser with no expiration time. The data persists even after the browser is closed or the device is restarted.

#### Key Features:
- **Persistence**: Data persists until it is manually deleted by the user or programmatically cleared by the application.
- **Capacity**: Can store up to 5MB (or more depending on the browser).
- **Scope**: Accessible within the same origin (protocol + domain + port).
- **Security**: Not automatically sent to the server with HTTP requests.
  
#### Use Cases:
- Storing user preferences (e.g., theme settings).
- Storing application state (e.g., whether a user completed onboarding).
- Storing small to moderate amounts of data that should persist across sessions.

#### Code Example:
```js
// Set data in localStorage
localStorage.setItem('key', 'value');

// Get data from localStorage
let data = localStorage.getItem('key');

// Remove item
localStorage.removeItem('key');

// Clear all data
localStorage.clear();
```

### 2. **sessionStorage**

**sessionStorage** is similar to localStorage but with a key difference in persistence: data stored in `sessionStorage` is cleared when the page session ends (i.e., when the tab or window is closed).

#### Key Features:
- **Persistence**: Data persists only within the current page session. When the browser window or tab is closed, the data is cleared.
- **Capacity**: Typically the same as localStorage (about 5MB, depending on the browser).
- **Scope**: Accessible within the same tab or window and the same origin.
- **Security**: Like localStorage, it is not automatically sent to the server.

#### Use Cases:
- Storing temporary data like form input or state that’s only relevant for a single browsing session.
- Keeping track of user actions within the current tab.
- Using temporary data that doesn’t need to persist beyond a single session.

#### Code Example:
```js
// Set data in sessionStorage
sessionStorage.setItem('key', 'value');

// Get data from sessionStorage
let data = sessionStorage.getItem('key');

// Remove item
sessionStorage.removeItem('key');

// Clear all data
sessionStorage.clear();
```

### 3. **Cookies**

**Cookies** are key-value pairs that are stored on the client but sent automatically with every HTTP request to the server. Cookies have additional attributes (such as expiration and domain settings) that allow them to be used for server communication.

#### Key Features:
- **Persistence**: Cookies can have an expiration time (e.g., `max-age` or `expires` attributes) or be session-based (cleared when the browser is closed if no expiration is set).
- **Capacity**: Much smaller capacity than localStorage or sessionStorage, typically around 4KB per cookie.
- **Scope**: Can be shared across the same domain and optionally across subdomains, depending on how the cookie is configured.
- **Security**: Cookies are sent with every HTTP request, which makes them suitable for server-side session handling but also a security risk if not handled correctly (e.g., they should be marked as `HttpOnly`, `Secure`, or `SameSite` to avoid attacks like XSS or CSRF).
  
#### Use Cases:
- Managing user authentication (session IDs, JWT tokens).
- Storing small pieces of data that need to be shared between the client and server.
- Storing tracking data (e.g., analytics, ad targeting).

#### Code Example:
```js
// Set a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

// Read cookies
let cookies = document.cookie;

// Delete a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

### Comparison Table:

| Feature                   | **localStorage**                  | **sessionStorage**                 | **Cookies**                       |
|----------------------------|-----------------------------------|------------------------------------|-----------------------------------|
| **Persistence**            | Until manually cleared            | Until tab/window is closed         | Can be set to expire or be session-based |
| **Capacity**               | ~5MB or more (depends on browser) | ~5MB (depends on browser)          | 4KB per cookie                    |
| **Data Availability**      | Across tabs, windows, and sessions (same origin) | Same tab or window (same origin)  | Sent with every HTTP request      |
| **Sent to Server**         | No                                | No                                 | Yes (with every HTTP request)     |
| **Scope**                  | Origin-based (protocol + domain + port) | Origin-based (same tab or window)  | Domain-based (can include subdomains) |
| **Security**               | Accessible via JavaScript         | Accessible via JavaScript          | Can be made `HttpOnly`, `Secure`, `SameSite` to enhance security |
| **Use Cases**              | Persistent client-side data       | Temporary session data             | Server communication, authentication, tracking |
| **Accessibility**          | Client-side only                  | Client-side only                   | Both client-side (JavaScript) and server-side (HTTP headers) |

### Key Differences:

1. **Persistence**:
   - `localStorage`: Data persists until explicitly deleted.
   - `sessionStorage`: Data lasts for the duration of the session (tab/window).
   - `Cookies`: Can persist based on expiration settings.

2. **Data Storage Limit**:
   - `localStorage` and `sessionStorage`: Can store much larger amounts of data (typically 5MB or more).
   - `Cookies`: Limited to about 4KB per cookie.

3. **Automatic Transmission**:
   - `localStorage` and `sessionStorage`: Data is not sent to the server unless explicitly done via AJAX.
   - `Cookies`: Automatically sent with every HTTP request, making them suitable for maintaining sessions across pages.

4. **Security**:
   - `localStorage` and `sessionStorage`: Accessible via JavaScript, which makes them vulnerable to XSS (Cross-Site Scripting) attacks.
   - `Cookies`: Can be marked as `HttpOnly` to prevent JavaScript access and `Secure` to only be sent over HTTPS.

### Conclusion:
- Use **localStorage** when you need to store data that persists across browser sessions (e.g., user settings).
- Use **sessionStorage** for storing temporary data that only needs to last for the current session (e.g., form data, session-specific states).
- Use **cookies** when you need to send data to the server with HTTP requests (e.g., authentication tokens, session IDs).