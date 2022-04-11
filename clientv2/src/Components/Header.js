

const Navigation = ({ navItems }) => {
  return navItems.map((i, index) => (
    <div key={ index }>
      <h3>{ i }</h3>
    </div>
  ))
};

const Header = () => {
    return (
        <header className="App-header">
            <div class='App-header-start'>
              <h2>LOGO</h2>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </div>
            <div class='App-header-middle'>
              <div style={{display: 'flex'}}>
                <Navigation navItems={['Home', 'Road Map', 'Team']}/>
              </div>
            </div>
            <div class='App-header-end'>
              <button> LogIn/SignUp </button>
            </div>
        </header>
    )
}

export default Header