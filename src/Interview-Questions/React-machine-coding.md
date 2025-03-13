### **React.js Machine Coding Test Questions** 🚀  

## **🟢 Beginner-Level Questions**

### **1. Build a Counter App**  
- Create a simple counter with **increment, decrement, and reset** buttons.  
- Display the count value on the screen.  
- Use `useState` for state management.  

**Bonus:** Add a step input field that allows users to increment/decrement by a custom number.

---

### **2. To-Do List Application**  
- Users should be able to **add, edit, delete, and mark tasks as completed**.  
- Store tasks in **local state (useState)**.  
- Display the tasks dynamically in a list.  

**Bonus:**  
- Use **`useReducer`** instead of `useState`.  
- Implement **localStorage** to persist tasks.

---

### **3. Search Bar with Auto-Suggestions**  
- Create a search input field that **filters a list of items** dynamically.  
- Show matching results as the user types (without a submit button).  

**Bonus:** Fetch suggestions **asynchronously** from an API (mock with `setTimeout`).

---

### **4. Toggle Theme (Dark/Light Mode)**  
- Implement a **theme switcher** that toggles between dark and light mode.  
- Save the theme **in localStorage** so it persists on page refresh.  

**Bonus:** Use **Context API** instead of prop drilling.

---

### **5. Dynamic Form Builder**  
- Create a **dynamic form** where fields are added/removed dynamically.  
- Include basic input validation.  
- Store form values in **React state**.  

**Bonus:** Implement **`useForm` from React Hook Form**.

---

## **🟡 Intermediate-Level Questions**
### **6. Pagination Component**  
- Create a **pagination component** that displays a large dataset in pages.  
- Show **previous, next, and numbered page buttons**.  
- Fetch and display paginated data from a mock API (`jsonplaceholder.typicode.com`).  

**Bonus:** Implement **infinite scrolling**.

---

### **7. Custom Modal Component**  
- Create a **reusable Modal** with a close button and overlay.  
- Modal should accept **title, content, and actions as props**.  

**Bonus:** Add **animations using Framer Motion**.

---

### **8. Debounced Search Input**  
- Implement a **search input** that delays API calls (debouncing).  
- Show results **only after the user stops typing** for 300ms.  
- Use **`useEffect` and `setTimeout`** for debouncing.  

**Bonus:** Implement **throttling** instead.

---

### **9. E-Commerce Cart System**  
- Create a simple **shopping cart** where users can:  
  - Add/remove items  
  - Increase/decrease quantity  
  - See the total price update dynamically  

**Bonus:** Use **Context API or Redux Toolkit** for state management.

---

### **10. Multi-Level Dropdown Menu**  
- Create a **nested dropdown menu** where clicking a parent item expands its sub-items.  
- Only **one dropdown should be open at a time**.  

**Bonus:** Implement this using **Recursion**.

---

## **🔴 Advanced-Level Questions**
### **11. Drag and Drop List (Kanban Board)**  
- Implement a **Trello-like drag-and-drop board** using `react-beautiful-dnd`.  
- Users should be able to **move items between lists**.  

**Bonus:** Persist data in **localStorage**.

---

### **12. Virtualized List for Large Data**  
- Display a **list of 10,000+ items efficiently** using `react-window`.  
- Only render **visible items** to improve performance.  

**Bonus:** Implement **infinite scrolling**.

---

### **13. Polling API with Retry Mechanism**  
- Fetch API data **every 5 seconds** (polling).  
- If an API request fails, **retry with exponential backoff**.  

**Bonus:** Implement **WebSockets** instead of polling.

---

### **14. Real-Time Chat App**  
- Implement a basic chat app using **WebSockets (Socket.io)**.  
- Users should be able to **send and receive messages in real time**.  

**Bonus:** Store chat history using **IndexedDB**.

---

### **15. Custom Table Component with Sorting & Filtering**  
- Build a **reusable table** that supports:  
  - **Sorting** (ascending/descending)  
  - **Filtering** (search by keyword)  
  - **Pagination**  

**Bonus:** Add **Excel export** functionality.

---

### **🔥 Bonus Challenges (For Expert-Level Interviews)**
- **Build a full authentication system** (JWT, OAuth, login, signup).  
- **Create a GraphQL client from scratch** (without Apollo).  
- **Implement Micro-Frontend Architecture** in React.  
- **Build a collaborative whiteboard app** (with real-time drawing).  

---

### **⚡ How to Prepare?**
- Master **React Hooks (`useState`, `useEffect`, `useMemo`, `useCallback`)**.  
- Learn **React Performance Optimization** (memoization, virtualization).  
- Get hands-on with **React Router, Context API, and Redux**.  
- Understand **testing (Jest, React Testing Library)**.  
- Write **clean, reusable components** using best practices.  

Would you like **code solutions** for any of these? 🚀