import { useState } from 'react';
import MovieInput from '../input';
import CustomButton from '../components/custom-button';
import Cinema from '../assets/bckimg.jpeg';
import DropdownInput from '../input/dropdown';
import './movies.styles.css';


// create a form input of a user booking a movie
// with there field name of label of fullname, gender, single or double, movieTitle, Amount, button of submit



const MoviesPage = () => {
    const [title] = useState('Welcome to zone cinema');
    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Cinema})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        padding: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    return (
        <>
        <div style={styles}>
            <div className="parallelogram-container">
            <div className="form-container">
            <h1 className='heading-primary'>{title}</h1>
              <form>
                <MovieInput
                label="Movie Name"
                inputProps={{
                    type: 'text',
                    placeholder: "Enter Movie Title",
                }}
                />
                <MovieInput
                label="Customer Name"
                inputProps={{
                    type: 'text',
                    placeholder: "Enter Full Name",
                }}
                />
    
                <DropdownInput
                  label="Gender"
                  name="gender"
                  options={['Male', 'Female']}
                  />

                <DropdownInput
                  label="Single or Double Seat"
                  name="seatType"
                  options={['Single', 'Double']}
                  />
                  <MovieInput
                label="Movie Price"
                inputProps={{
                    type: 'text',
                    placeholder: "Enter amount of movie",
                }}
                />
                <CustomButton
                type="submit"
                label="Book Now"
                className="submit-btn"
                />

              </form>     
              </div>
             </div>
           </div>
      </>
    );
}


export default MoviesPage;