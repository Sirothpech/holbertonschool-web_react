# React State

### Tasks

0. <u>**Adding a local state for notifications**</u>

   - Create a local state to store a displayDrawer element.
   - Define default state in the constructor.
   - Implement functions to handle displayDrawer and hideDrawer.
   - Pass props and functions to the Notifications component.
   - Update tests to verify state changes.

1. <u>**Controlled components and state callback**</u>

   - Implement a form within the Login component.
   - Create local state for isLoggedIn, email, password, and enableSubmit.
   - Handle form submission and input changes.
   - Update tests to validate form behavior.

2. <u>**Context**</u>

   - Create a simple React Context to manage application state.
   - Modify the App container to use context for user authentication.
   - Refactor Header and Footer components to use context.
   - Implement login and logout functions.
   - Write tests to ensure correct context behavior.

3. <u>**Context consumer & advanced state**</u>

   - Make the Footer component subscribe to context changes.
   - Modify the App container to manage notifications.
   - Implement markNotificationAsRead function.
   - Update Notifications component to use the new function.
   - Write tests to validate component behavior.

4. <u>**Introduction to React Hooks**</u>

   - Use React Hooks to manage state in the CourseListRow component.
   - Add rowChecked style when a checkbox is checked.
   - Ensure proper handling of checkbox state changes.
   
**Requirements:**

- Ensure all default state values are set in the constructor.
- Prevent page reload on form submission.
- Validate button enabling based on input values.
- No lint errors in the console during execution.

**Tips:**

- Convert function components to classes if context usage is needed.
- Avoid using Enzyme's setContext API, as it's incompatible with the new Context API.
- Clean up unused state and props after refactoring.
- Define propTypes and defaultProps for new props.