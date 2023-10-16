import "../src/home.css";



function Homepage() {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark head-nav">
                <a className="navbar-brand" href="#">Vivek Mondal</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Links
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="https://www.facebook.com/profile.php?id=100005328227049" target="blank">Facebook</a>
                                <a className="dropdown-item" href="https://www.linkedin.com/in/vivekmondaldatascince/" target="blank">LinkedIn</a>
                                <a className="dropdown-item" href="https://github.com/Vivekmondal9" target="blank">Github</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav></>
    )
}

export default Homepage;