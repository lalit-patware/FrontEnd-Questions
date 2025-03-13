As a **Senior Frontend Engineer**, code reviews are crucial for maintaining high-quality, scalable, and maintainable code. My approach to code reviews is structured around best practices, clear communication, and a collaborative mindset. Here's how I ensure quality standards are met:

---

### **1. Understand the Context Before Reviewing**
- Read the **PR description** to understand the purpose of the changes.
- Check the related **JIRA ticket, user story, or requirement docs**.
- Understand the **impact of the changes** on the overall system.

---

### **2. Ensure Code Readability & Maintainability**
- **Is the code clean and easy to read?**  
  - Use meaningful variable and function names.  
  - Avoid unnecessary complexity and deeply nested logic.  

- **Is the code modular and reusable?**  
  - Ensure reusable components follow **Single Responsibility Principle (SRP)**.  
  - Avoid excessive duplication (**DRY principle**).  

- **Is the file structure well-organized?**  
  - Ensure components, hooks, and utilities are placed correctly.  

---

### **3. Enforce Best Practices & Standards**
- **JavaScript/TypeScript Standards**
  - Ensure adherence to **ESLint rules** (e.g., Airbnb or custom configs).
  - Proper use of **ES6+ features** (e.g., destructuring, arrow functions).
  - Type safety (**TypeScript or PropTypes**) is properly implemented.

- **React Best Practices**
  - Ensure functional components use **React Hooks correctly**.
  - Check that state management follows best practices (e.g., **Context API, Redux, Zustand**).
  - Ensure proper **useEffect dependency management** to avoid unnecessary re-renders.

- **Performance Considerations**
  - Avoid **unnecessary re-renders** (e.g., use `useMemo`, `useCallback`).
  - Optimize list rendering (`React.memo`, `key` props in `.map()`).
  - Ensure images, assets, and lazy loading are optimized.

---

### **4. Security & Accessibility Checks**
- **Security Considerations**
  - Prevent **XSS vulnerabilities** (e.g., avoid `dangerouslySetInnerHTML`).
  - Ensure **API calls are secure** (e.g., no hardcoded tokens, proper headers).
  - Validate user inputs to prevent **injections**.

- **Accessibility (a11y) Compliance**
  - Check **semantic HTML** (e.g., `button` instead of `div onClick`).
  - Ensure proper use of **ARIA attributes**.
  - Keyboard navigation and focus states are correctly handled.

---

### **5. Test Coverage & Edge Cases**
- **Unit Tests**: Ensure components have **Jest/React Testing Library** coverage.
- **Integration Tests**: Verify UI behavior with **Cypress/Playwright**.
- **Edge Cases**: Ensure error handling and unexpected input cases are covered.

---

### **6. Provide Constructive Feedback & Encourage Discussion**
- **Be clear & specific**: Avoid vague comments like “This can be better.” Instead, suggest alternatives.
  - ✅ *"Consider using `useMemo` here to prevent unnecessary re-renders."*
  - ✅ *"This function is doing multiple things. Can we break it into smaller functions?"*

- **Balance praise & critique**: Acknowledge good code improvements while pointing out issues.
- **Encourage learning**: Share documentation, articles, or best practice links when relevant.

---

### **7. Verify UI/UX Consistency**
- Ensure the **UI matches the design** (e.g., Figma, Adobe XD).
- Check **cross-browser compatibility**.
- Ensure **consistent spacing, colors, typography**.

---

### **8. Approve or Request Changes**
- ✅ **Approve** if the code meets standards.
- 🔄 **Request changes** if improvements are needed, with clear explanations.
- 🚀 **Merge only when all critical issues are resolved**.

---

### **Tools & Automation to Maintain Code Quality**
- **Linting & Formatting**:  
  - ESLint + Prettier (enforce coding standards)
- **Code Reviews in PRs**:  
  - GitHub/GitLab Merge Request templates
- **Automated Testing**:  
  - Jest, React Testing Library, Cypress
- **CI/CD Pipelines**:  
  - Run automated tests before merging
