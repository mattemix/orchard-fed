import './Header.scss'

function Header() {
    return (
        <header className="main-header container-fluid" >
          <div className="d-flex align-items-center container">
            <div className="row">
                <img src="../assets/images/Wellness-Logo.png" alt="Wellness" className="align-self-center"/>
            </div>
           </div>
        </header>
    )
}

export default Header