const Course = ({ course }) => {
  return (
    <>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </>
  )
}

const Header = ({ courseName }) => <h2>{courseName}</h2>

const Content = ({ courseParts }) => {
    return (
        <>
            {courseParts.map(coursePart => <Part key={coursePart.id} name={coursePart.name} exercises={coursePart.exercises} />)}
        </>
    )
}

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Total = ({ courseParts }) => {
    const total = courseParts.reduce((total, coursePart) => {
        return total + coursePart.exercises
    }, 0)

    return <strong>total of {total} exercises</strong>
}

export default Course;