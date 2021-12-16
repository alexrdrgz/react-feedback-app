import Header from "./components/Header.jsx"

function App() {
    const title = 'Blog Post'

    return (
        <>
            <Header text="Feedback App"/>
            <div className="container ">
                <h1>{title}</h1>
            </div>
        </>
    )
}

export default App