import React from 'react';
import CollectionAlbumIndex from '../collectionAlbum/CollectionAlbumIndex';

const Collection = (props) => {
    return (
        <div className="bg">
            <CollectionAlbumIndex token={props.token} />
        </div>
    )
}

export default Collection;