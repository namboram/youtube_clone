import React, {useRef} from 'react';
import App from '../../app';
import styles from './header.module.css';

const Header = ({onSearch}) => {
    const inputRef = useRef();
    
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);

    }

    const onClick =() => {
        handleSearch();
    }

    const onKeyPress =(event)=> {
        if (event.key === 'Enter'){
            handleSearch();
        }
    }

    

   return (
    <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo"/>
                <h1 className={styles.title}>YOUTUBE</h1>
            </div>
            <div className={styles.container}>
                <input 
                    ref={inputRef}
                    className={styles.input}
                    type="search"
                    placeholder="Search..."
                    onKeyPress={onKeyPress}
                /> 
                <button
                    className={styles.searchBtn}
                    type="submit" 
                    onClick={onClick}   
                >
                <img className={styles.searchImg} src="/images/search.png" alt="search"/>
                </button>
            </div>
           
        </header>

    );
}
        
      

export default Header;