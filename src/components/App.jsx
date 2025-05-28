const App = () => (
    <>
    <div className="navbar bg-base-100 shadow-sm">
        <div className="w-full flex justify-between items-center px-4">
            <a className="btn btn-ghost text-xl">John Mullaney</a>
            <a href="mailto:jamullaney@protonmail.com?subject=Hey%20John&body=Let's%20connect.">
                <img src="images/mail.svg" alt="Email Icon" />
            </a>
        </div>
    </div>
        <div className="hero bg-base-300 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hi, I'm John</h1>
                    <p className="py-6">
                        My experiences with game development, web development, and networking allow me to excel in any scenario. 
                        In my free time, I can usually be found reading, tinkering, and watching basketball.
                    </p>
                    
                </div>
            </div>
        </div>
        <div className="w-full flex justify-center py-8">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                <div className="card bg-base-300 w-80 h-96 shadow-sm flex flex-col">
                    <figure className="flex-shrink-0 h-32">
                        <img
                            src="images/lucky&zombie.png"
                            alt="Cartoon dog with cartoon zombie in the background. Don't worry, the dog can't get hurt."
                            className="w-full h-full object-cover" />
                    </figure>
                    <div className="card-body flex-grow flex flex-col justify-between">
                        <div>
                            <h2 className="card-title">DogPocalypse</h2>
                            <p>You play as Lucky and hide from zombies while collecting food for your human.</p>
                        </div>
                        <div className="card-actions justify-end">
                            <a href="https://johnmullaney.tech/DogBuildWeb/" target="_blank" className="btn btn-primary">Play Now</a>
                            <a href="https://github.com/JohnAngusG/Dogpocalypse/" target="_blank" className="btn btn-secondary">Thoughts</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-300 w-80 h-96 shadow-sm flex flex-col">
                    <figure className="flex-shrink-0 h-32">
                        <img
                            src="images/tetrisFixed.png"
                            alt="Tetris game screenshot"
                            className="w-full h-full object-cover" />
                    </figure>
                    <div className="card-body flex-grow flex flex-col justify-between">
                        <div>
                            <h2 className="card-title">Tetris</h2>
                            <p>A fully implemented Tetris game in C++ using SFML, featuring piece previews and the ability to instantly drop pieces.</p>
                        </div>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/JohnAngusG/Tetris" target="_blank" className="btn btn-primary">Play Now</a>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-300 w-80 h-96 shadow-sm flex flex-col">
                    <figure className="flex-shrink-0 h-32">
                        <img
                            src="images/catsWebPic.png"
                            alt="2D Cartoon cat standing next to a tree full of hearts and a green background."
                            className="w-full h-full object-cover" />
                    </figure>
                    <div className="card-body flex-grow flex flex-col justify-between">
                        <div>
                            <h2 className="card-title">Cats From Up There</h2>
                            <p>A 2D Harvest Moon / Stardew Valley inspired game. I wanted to challenge myself and implement my own inventory system.</p>
                        </div>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/JohnAngusG/CatsWeb" target="_blank" className="btn btn-primary">Play Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default App;