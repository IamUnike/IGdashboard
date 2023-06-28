// import woman1 from '../asset/woman1.jpg'
// import man1 from '../asset/man1.jpg'
// import woman2 from '../asset/woman2.jpg'
// import man2 from '../asset/man2.jpg'
// import woman3 from '../asset/woman3.jpg'
// import man3 from '../asset/man3.jpg'
import getPhotoUrl from 'get-photo-url';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../dexie'

const Gallery = () => {
    const allPhotos = useLiveQuery( () => db.gallery.toArray(), [])

    const addPhoto = async() => {
        db.gallery.add({
            url: await getPhotoUrl('#addPhotoInput')
        })
    }

    const removePhoto = (id) => {
        db.gallery.delete(id)
    }


    return ( 
        <section className="gallery-section">
            <input type="file" name="photo" id="addPhotoInput" style={{display:'none'}} />
            <label htmlFor="addPhotoInput" onClick={addPhoto}>
                <i className="add-photo-btn fa fa-plus-square" ></i>
            </label>

            <div className='gallery'>
                {!allPhotos && <p> Loading... </p> }
                {allPhotos && allPhotos.map(photo => (
                    <div className="item" key={photo.id}>
                        <img src={photo.url} className='item-image' alt="" />
                        <button className='delete-btn' onClick={() => removePhoto(photo.id)}> Delete </button>
                    </div>
                ))}
                
            </div>

        </section>
     );
}
 
export default Gallery;