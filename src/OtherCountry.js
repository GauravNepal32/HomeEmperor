import { NavLink } from "react-router-dom";
const OtherCountry = ({disableScroll,enableScroll,toggleNav,countries}) => {
    return (
        <>
             <ul
                    onMouseOver={disableScroll}
                    onMouseLeave={enableScroll}
                    className='list-unstyled small-dropdown country-small-dropdown navbar-dropdown-container home-dropdown-container'
                    aria-labelledby='navbarDropdownMenuLink'>
                        {countries.map((country)=>{

                    <li>
                      <NavLink
                        onClick={toggleNav}
                        data-toggle='collapse'
                        data-target='.navbar-collapse.show'
                        className='dropdown-item'
                        to='/'>
                            {country.name}
                      </NavLink>
                    </li>
                        })}
                    <li>
                      <NavLink
                        onClick={toggleNav}
                        className='dropdown-item'
                        to='a'>
                          France
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleNav}
                        className='dropdown-item'
                        to='/testPrep'>
                          Dubai
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleNav}
                        className='dropdown-item'
                        to='/contact'>
                          Ireland
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleNav}
                        className='dropdown-item'
                        to='/contact'>
                          Denmark
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleNav}
                        className='dropdown-item'
                        to='/contact'>
                          Bangladesh
                      </NavLink>
                    </li>
                  </ul>
        </>
    );
}

export default OtherCountry;