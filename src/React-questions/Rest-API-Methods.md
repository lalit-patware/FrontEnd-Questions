### **REST API Methods & Their Differences**  

REST (Representational State Transfer) APIs use HTTP methods to perform CRUD (Create, Read, Update, Delete) operations.  

| **Method**   | **Purpose**            | **Use Case** | **Idempotent?** | **Request Body?** |
|-------------|------------------------|--------------|----------------|----------------|
| **GET**     | Retrieve data          | Fetch user details, get a list of products | ✅ Yes | ❌ No |
| **POST**    | Create new resource    | Create a new user, submit a form | ❌ No | ✅ Yes |
| **PUT**     | Update existing resource (full) | Replace an entire user profile | ✅ Yes | ✅ Yes |
| **PATCH**   | Update existing resource (partial) | Update only the email of a user | ❌ No | ✅ Yes |
| **DELETE**  | Remove a resource      | Delete a user account | ✅ Yes | ❌ No |

### **Key Differences**  
- **GET vs POST**: `GET` retrieves data, while `POST` creates new data.  
- **PUT vs PATCH**: `PUT` updates the entire resource, `PATCH` updates only specific fields.  
- **DELETE vs GET**: `DELETE` removes data, whereas `GET` fetches it.  
- **Idempotency**: `GET`, `PUT`, and `DELETE` are idempotent (multiple calls have the same effect), but `POST` and `PATCH` are not.  

Would you like detailed examples for any of these? 🚀