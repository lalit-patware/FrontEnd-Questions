### **SSR (Server-Side Rendering) vs CSR (Client-Side Rendering) in React**  

| Feature          | **SSR (Server-Side Rendering)** | **CSR (Client-Side Rendering)** |
|-----------------|--------------------------------|--------------------------------|
| **Rendering**    | HTML is generated on the server before being sent to the browser. | JavaScript loads in the browser and renders content dynamically. |
| **Initial Load** | Faster (HTML is pre-rendered). | Slower (Blank page until JS loads). |
| **SEO**         | Better (Content is available immediately). | Worse (Content loads dynamically). |
| **Performance** | Faster first paint, but may increase server load. | Slower initial load but better for interactions. |
| **Interactivity** | Requires hydration for interactivity. | React works normally after load. |
| **Use Case**    | Best for SEO-heavy apps (e.g., blogs, e-commerce). | Best for SPAs and dashboards. |

**📝 Summary:**  
- **Use SSR** when SEO and fast initial load matter (e.g., blogs, e-commerce).  
- **Use CSR** for dynamic, interactive applications (e.g., dashboards, social media).