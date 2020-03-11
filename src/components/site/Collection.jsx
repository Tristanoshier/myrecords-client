import React from 'react';
import CollectionAlbumIndex from '../collectionAlbum/CollectionAlbumIndex';

const Collection = (props) => {
    return (
        <div>
            <CollectionAlbumIndex token={props.token}/>
        </div>
    )
}

export default Collection;
