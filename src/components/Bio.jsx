import { useState } from 'react';
import profileIcon from '../asset/profile-icon.png'
import getPhotoUrl from 'get-photo-url';
import { db } from '../dexie';
import { useEffect } from 'react';
import Form from './Form';

import { createContext } from 'react';

export const bioContext = createContext()

const Bio = () => {
    const [userDetails, setUserDetails] = useState('')
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)

    const [profilePhoto, setProfilePhoto] = useState(profileIcon)


    useEffect( () => {
        const setDataFromDb = async () => {
            const userDetailsFromDb = await db.bio.get('info')
            const profilePhotofromDb = await db.bio.get('profilePhoto')
           userDetailsFromDb && setUserDetails(userDetailsFromDb)
           profilePhotofromDb && setProfilePhoto(profilePhotofromDb)
        }
        setDataFromDb()
    }, [])

    const updateUserDetails = async (event) => {
        event.preventDefault()

        const objectData = {
            name: event.target.nameOfUser.value,
            about: event.target.aboutUser.value
        } 
        setUserDetails(objectData)

        //update bio object store details on database
        await db.bio.put(objectData, 'info')

        setEditFormIsOpen(false)
    }

    

    const updateProfilePhoto = async() => {
        //get the selected photo
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto(newProfilePhoto)
        
        await db.bio.put(newProfilePhoto, 'profilePhoto')
    }
    

    return ( 
        <section className="bio">
            <input type="file" accept='image/*' name='photo' id='profilePhotoInput' style={{display:'none'}} />
            <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
                <div className="profile-photo" role="button" title="Click to edit photo">
                    <img src={profilePhoto} alt="profile" />
                </div>
            </label>

            <div className="profile-info">
                <p className='name'> {userDetails.name} </p>
                <p className="about"> {userDetails.about} </p>

                <bioContext.Provider value={{userDetails, updateUserDetails, setEditFormIsOpen}}>
                    {editFormIsOpen ? <Form /> : <button onClick={ () => setEditFormIsOpen(true) }> Edit </button> }
                </bioContext.Provider>
            </div>
        </section>
     );
}

export default Bio;
