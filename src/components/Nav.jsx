import instagram from '../asset/instagram.webp'

const Nav = () => {
    return ( 
        <nav>
            <button className='logo'>
                <img src={instagram} alt="logo" />
            </button>

           
            <span className="nav-links">
                <button>
                    <i className='fa fa-home'></i>
                </button>

                <button>
                    <i className='fa fa-comment'></i>
                </button>

                <button>
                    <i className='fa fa-compass'></i>
                </button>

                <button>
                    <i className='fa fa-heart'></i>
                </button>
            </span>
        </nav>
     );
}
 
export default Nav;