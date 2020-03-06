import React from 'react';
import CollectionAlbumIndex from '../collectionAlbum/CollectionAlbumIndex';

const Collection = (props) => {
    return (
        <div>
            <h1 className= "header">Collection</h1>
            <CollectionAlbumIndex token={props.token}/>
        </div>
    )
}

export default Collection;
