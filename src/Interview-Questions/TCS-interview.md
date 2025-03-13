###  TCS Reactjs
1. What is React ?
2. How React is diff. from Angular & Vue.js ?
3. Explain state & props ?
4. How to pass data from child to parent in class-based as well as functional-based component?
5. Explain Life cycle methods  in class-based as well as functional-based component?
6. Explain Hooks in react?
7. What will happen if we pass null or undefined instead of empty array of useEffect hook as second argument ?
8. What is Redux ?
9. Why do we need to use Redux middleware to perform asynchronous activity ?
10. What is Redux Saga vs Redux Thunk ?
11. string interpolaction
12. React Router and explain with example
13. parent to child ways and explain the communication 

1.What are pure functions
2.What are React pure component 
3.What are higher order components
   Explain with example
4. Typescript and example
5. Redux

1. const arr = [1,2,3,4,5,6,7,8,9,10]
var numArr = arr.map(val=>val>5)   
What will the value of numArr  be?
//[false, false, false, false, false, true, true, true, true, true]
2. Diff between null and undefined ,undefined and not defined
 - Arrow Function vs Regular Function
3. Extract fifth element of array without using index. arr = [1,2,3,4,5,6,7,8,9,10]
ans: const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [, , , , fifth] = arr; // Use destructuring to skip the first four elements
console.log(fifth);

4. Destructure city from below Object
var empObj = {
name: "Chandra",
age: 36,
address: {
	addrs1: "Koramangala",
  city: "bangalore",  
}
}
Ans:- var { address: { city } } = empObj;
5. How many times will setState run and how many times the component will re-render, what will be the final value of state(value)
class Counter extends React.Component{
   constructor(props){
     super(props)
    //initial state set up
     this.state = {value:0}
   }
   componentDidMount(){
    //updating state
    this.setState({value:this.state.value+1})
    this.setState({value:this.state.value+1})
    this.setState({value:this.state.value+1})
    this.setState({value:this.state.value+1})
   }
   render(){
    return <div>Message:{this.state.value}</div>
   }
}
6. Centering div with flex and having only three elements taking evenly distributed space
<div class="parent">
<div class="child">
Content1
</div>
<div class="child">
Content2
</div>
<div class="child">
Content3
</div>
</div>
7. What is Closure, currying, generators
8. How will you use useEffect to add event listeners.
9. Can we have one dispatched action trigger multiple reducers in redux?
Brief introduction about myself
Asked about the recent projects
Authentication implementation (single sign on)
Handling exception in react
Optimization technique in react like useMemo and useCallback
Build tools in react like webpack
Knowledge about the unit test cases
State management tools, redux and context
Issues faced when we use redux (not updating the state)
Explain HOC
Custom hook which you created recently and why did you created that, and how it will help the project.
Axios and fetch
Axios interceptor
CSS frameworks
Responsive design using CSS