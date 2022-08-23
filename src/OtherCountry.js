import { NavLink } from "react-router-dom";
const OtherCountry = ({disableScroll,enableScroll,toggleNav,countries}) => {
    return (
        <>
             <ul
                    onMouseOver={disableScroll}
                    onMouseLeave={enableScroll}
                    className='list-unstyled small-dropdown country-small-dropdown navbar-dropdown-container home-dropdown-container'
                    aria-labelledby='navbarDropdownMenuLink'>
                        {countries.map((country)=>(
                        <li key={country.id}>
                        <NavLink
                            onClick={toggleNav}
                            data-toggle='collapse'
                            data-target='.navbar-collapse.show'
                            className='dropdown-item'
                            to={`country/${country.name}`}>
                                {country.name}
                        </NavLink>
                    </li>
                        ))}
                  </ul>
        </>
    );
}

export default OtherCountry;