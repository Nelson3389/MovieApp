const Card = () => {
    return (
        <div>
            <h2>Card Component</h2>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <h2>Functional Arrow Component</h2>

            <Card title="Star Wars" />
            <Card title="Avatar"/>
            <Card title="The Lion King"/>
        </div>
    )
}

export default App
