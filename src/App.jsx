import Pet from "./Pet"

const App = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Adopt Me!</h1>
                    <Pet name="Luna" animal="dog" breed="Havanese" />
                    <Pet name="Pepper" animal="bird" breed="Cockatiel" />
                    <Pet name="Doink" animal="cat" breed="Mix" />
                </div>
            </div>
        </>
    )
}

export default App
