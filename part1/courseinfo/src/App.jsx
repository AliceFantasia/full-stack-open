  const Header = (props) => {
    return <h1>{props.name}</h1>;
  }

  const Part = (props) => {
    return <p> {props.part} {props.exercises}</p>
  }

  const Content = (props) => {
    return (
      <div>
        <Part part={props.parts[0].name} exercises={props.parts[0].number}/>
        <Part part={props.parts[1].name} exercises={props.parts[1].number}/>
        <Part part={props.parts[2].name} exercises={props.parts[2].number}/>
      </div>
    )
  }

  const Total = (props) => {
    return <p>Number of exercises: {props.parts[0].number + props.parts[1].number + props.parts[2].number}</p>
  }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        number: 10
      },
      {
        name: 'Using props to pass data',
        number: 7
      },
      {
        name: 'State of a component',
        number: 14
      },
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App