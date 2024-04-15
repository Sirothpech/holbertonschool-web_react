## TypeScript

### Tasks

1. **Creating an interface for a student**
   - Write an interface named `Student` with properties: `firstName`, `lastName`, `age`, and `location`.
   - Create two student variables (`student1` and `student2`) and store them in an array named `studentsList`.
   - Render a table using Vanilla JavaScript and append a new row for each student in the `studentsList`.

2. **Let's build a Teacher interface**
   - Write an interface named `Teacher` with properties: `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience`, and `location`.
   - Allow adding any attribute to the `Teacher` object without specifying the name.
   - Example usage provided.

3. **Extending the Teacher class**
   - Write an interface named `Directors` that extends `Teacher` and requires an attribute named `numberOfReports`.

4. **Printing teachers**
   - Write a function `printTeacher` that accepts `firstName` and `lastName` and returns the first letter of `firstName` and the full `lastName`.
   - Define an interface for the function named `printTeacherFunction`.

5. **Writing a class**
   - Write a class named `StudentClass` with methods `workOnHomework` and `displayName`.
   - Describe the constructor and the class through an interface.

6. **Advanced types Part 1**
   - Create `DirectorInterface` and `TeacherInterface` interfaces with specified methods.
   - Implement `Director` and `Teacher` classes with their respective methods.
   - Write a function `createEmployee` that returns either a `Director` or a `Teacher` instance based on salary.

7. **String literal types**
   - Define a String literal type named `Subjects` allowing only the values `Math` or `History`.
   - Write a function `teachClass` that returns a string based on the input `todayClass`.

8. **Ambient Namespaces**
   - Create types `RowID` and `RowElement`.
   - Write an ambient file `crud.d.ts` containing type declarations for CRUD functions.
   - Implement CRUD functions using the types defined.

9. **Namespace & Declaration merging**
   - Create files `Teacher.ts`, `Subject.ts`, `Cpp.ts`, `React.ts`, and `Java.ts` in a namespace named `Subjects`.
   - Define interfaces and classes with specified attributes and methods.

10. **Brand convention & Nominal typing**
    - Create interfaces `MajorCredits` and `MinorCredits` with a `credits` property and a `brand` property.
    - Write functions `sumMajorCredits` and `sumMinorCredits` that return the sum of credits for two subjects.