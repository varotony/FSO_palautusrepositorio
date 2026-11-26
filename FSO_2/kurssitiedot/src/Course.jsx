const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    );
};
const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => (
                <Part
                    key={part.id}
                    name={part.name}
                    exercises={part.exercises}
                />
            ))}
        </div>
    );
};

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
};

const Total = ({ parts }) => {
    const sum = parts.reduce((s, p) => s + p.exercises, 0);

    return (
        <p>
            <strong>Total of {sum} exercises</strong>
        </p>
    );
};

export default Course;