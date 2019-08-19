import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/

const tipTopMorning = (number) =>{
    return(      
        
        `TIP TOP IN THE MORNING TO YA LADS, especially you ${number}!!!`
    )
}
const HIWORLD = () =>{

    var tipTopList = []
    
    for (let i = 0; i < 10; i++) {
                
        tipTopList[i] = tipTopMorning(i);
        
    }

    return tipTopList

}

const classic = {
    name: 'emil',
    age: 18,
    status: 'single',    
    doPrank: function (a, b){
        console.log(a+b);
    }

}
classic.doPrank(1,5);
const test = classic.doPrank
test(1,5);


class ClassTF2{
    constructor(id, name){
        
        this.name = name;
        this.id = id
    }
    displayClass(){
        console.log(`Class name is ${this.name} and id is ${this.id}`)
    }

}
debugger
const spy = new ClassTF2(9, 'Spy')
spy.displayClass(); 


const Courses = () =>{

        //const name = 'Half stack application manager blah blah';
        const parts = [
            {
                name:'Part 1: Fundementals of react',
                excercises: 10
            },
            {
                name:'Part 2: Using props to pass data',
                excercises: 7
            },
            {
                name:'Part 3: State of component',
                excercises: 14
            }
        ];

        return parts;
}



const addCourse = (course) =>{
    
    return `<div class="course"> 
                ${course}
            </div>`;
        }
        
let showCourses = false
const AddCourse = (course) =>{

    if (showCourses == true){
        return(
            <div>
                <p>{course.name}: </p>
                <p>This course is going to have {course.exercises} number of excercises </p>
            </div>
        )
    }
    else{
        return null;
    }

}


const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }




const App = (props) => {

    
    /*setTimeout(
        () => setCounter(counter + 1),
        1000
        )*/
        
        /* const handleClick = () =>{
            counter++;
            refresh()
        }*/
        


    const [counter, setCounter] = useState(0)
    const setToValue = (val) => setCounter(val)

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    const [allClicks, setAll] = useState([])
    const [allNums, setAllNums] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left+1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right+1)
    }

    const handleNumber = () =>{
        setAllNums(allNums.concat(1))
    }

    const generateText = () =>{
        showCourses = true;
        refresh();
    }

    return (       
        <main>


        <div>
            {left}
            <button onClick ={handleLeftClick}>left</button>
            <button onClick ={handleRightClick}>right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
        </div>

        <div>{counter}</div>

            <button onClick={handleNumber}>
                plus
            </button>
            <button onClick={() => setToValue(0)}>
                zero
            </button>
            <button onClick={() => setToValue(counter-1)}>
                negative
            </button>

            <p>{allNums.join(' ')}</p>

            <button onClick={generateText}>
                generate text
            </button>

            {AddCourse(course.parts[0])}
            {AddCourse(course.parts[1])}
            {AddCourse(course.parts[2])}

        </main>
    )
  }

  let counter = 1;
  
const Rogriduez = {
    name: 'Rogriduez',
    age: 18
}

const helloHi = ({name, age}) => {
    const lastYear = () => age -= 1
    console.log(name);
    console.log(lastYear());
}

helloHi(Rogriduez);

const refresh = () =>{
    ReactDOM.render(<App counter={counter} />, document.getElementById('root'))
}
refresh()


