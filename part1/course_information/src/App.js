
function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass datat'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  let content = [
    {'part': part1, nExercises: exercises1},
    {'part': part2, nExercises: exercises2},
    {'part': part3, nExercises: exercises3},
  ]

  return (
    <div>
      <Header courseName={course} />
      <Content content={content} />
      <Total numOfExercises={exercises1+exercises2+exercises3} />
    </div>
  );
}

const Header = (props) => {
  return(
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  console.log(props.content[1].part)
  return (
    <>
      <Part courseName={props.content[0].part} nExercises={props.content[0].nExercises} />
      <Part courseName={props.content[1].part} nExercises={props.content[1].nExercises} />
      <Part courseName={props.content[2].part} nExercises={props.content[2].nExercises} />
    </>

  )
}

const Total = (props) => {
  return (
    <p>Total: {props.numOfExercises}</p>
  )
}

const Part = (props) => {
  return(
    <p>{props.courseName} {props.nExercises}</p>
  )
}

export default App;
