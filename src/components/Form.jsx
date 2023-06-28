import { useContext } from "react";
import { bioContext } from "./Bio";

const Form = () => {
    const bioContextValue = useContext(bioContext)

    return ( 
        <>
            <form className='edit-bio-form' onSubmit={ (e) => bioContextValue.updateUserDetails(e) }>
                <input type="text" id='' defaultValue={bioContextValue.userDetails?.name} name='nameOfUser' placeholder='Your name' />
                <input type="text" id='' defaultValue={bioContextValue.userDetails?.about} name='aboutUser' placeholder='About you' />
                <br />

                <button type='button' className='cancel-btn' onClick={ () => bioContextValue.setEditFormIsOpen(false)}> Cancel </button>
                <button type='submit' className='save-btn'> Save </button>
        </form>
        </>
     );
}
 
export default Form;