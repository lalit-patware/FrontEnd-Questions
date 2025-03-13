### **Handling Dynamic Routing in Next.js**
Dynamic routing in Next.js allows you to create routes that change based on user input, such as URLs with parameters (e.g., `/product/[id]`). 

Next.js supports dynamic routing in **both the App Router (`app/`) and Page Router (`pages/`).**  

---

## **1. Dynamic Routing in Page Router (`pages/`)**
### **Steps to Implement:**
1. Create a dynamic file inside the `pages/` directory, using square brackets (e.g., `[id].js`).
2. Use `useRouter` from `next/router` to extract the dynamic parameter.

### **Example: `/pages/product/[id].js`**
```tsx
import { useRouter } from 'next/router';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Extract dynamic ID from URL

  return <h1>Product ID: {id}</h1>;
};

export default ProductDetail;
```
👉 **URL Example:** `/product/123` → Displays **"Product ID: 123"**

#### **Fetching Data for Dynamic Routes (SSR/SSG)**
For **server-side rendering (SSR)** or **static site generation (SSG)**:
- Use `getServerSideProps` (SSR)
- Use `getStaticPaths` + `getStaticProps` (SSG)

```tsx
// pages/product/[id].js
export async function getServerSideProps(context) {
  const { id } = context.params;
  const product = await fetch(`https://api.example.com/products/${id}`).then(res => res.json());

  return { props: { product } };
}

const ProductDetail = ({ product }) => {
  return <h1>{product.name}</h1>;
};

export default ProductDetail;
```

---

## **2. Dynamic Routing in App Router (`app/`)**
### **Steps to Implement:**
1. Create a folder inside `app/` with square brackets (e.g., `[id]`).
2. Place a `page.tsx` file inside the folder.
3. Use `params` inside the Server Component.

### **Example: `/app/product/[id]/page.tsx`**
```tsx
const ProductDetail = ({ params }: { params: { id: string } }) => {
  return <h1>Product ID: {params.id}</h1>;
};

export default ProductDetail;
```
👉 **URL Example:** `/product/123` → Displays **"Product ID: 123"**

#### **Fetching Data for Dynamic Routes (Server Components)**
With the App Router, data fetching is server-side by default.

```tsx
// app/product/[id]/page.tsx
const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product = await fetch(`https://api.example.com/products/${params.id}`).then(res => res.json());

  return <h1>{product.name}</h1>;
};

export default ProductDetail;
```

---

## **Comparison: Page Router vs. App Router for Dynamic Routes**
| Feature               | Page Router (`pages/`) | App Router (`app/`) |
|----------------------|--------------------|----------------|
| Routing Mechanism  | `useRouter().query` | `params` in Server Component |
| Data Fetching      | `getServerSideProps`, `getStaticProps` | Directly inside Server Component |
| API Calls          | Done in `getServerSideProps` or CSR | Done in Server Components (default) |
| Performance       | Supports ISR, SSR, CSR | Optimized via Server Components |

---

### **When to Use Which?**
- **New projects?** → Use **App Router** (`app/`) for performance and better DX.
- **Existing projects with Page Router?** → Stick to **Page Router** (`pages/`) unless migrating.

Would you like help with migrating a dynamic route from the Page Router to the App Router? 🚀