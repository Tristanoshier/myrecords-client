import React from 'react';
import {Input, Form, FormGroup} from 'reactstrap';

const CollectionSearch = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const filterAlbums = () => {
        let result = document.getElementById('search').value;
        if (result === ''){
            props.setFilteredAlbums([])
            console.log('search')
        } else {
            let filtered = props.collectionAlbums.filter(album => {
                if(album.name.toLowerCase().includes(result)) {
                    return album 
                }
            })
            props.setFilteredAlbums(filtered)
        }
    }

    return (
        <>
        <h3>Search Albums</h3> 
        <Form onSubmit={handleSubmit} id="form" autoComplete="off">
            <FormGroup>
                <Input onChange={filterAlbums} id="search" type="text" placeholder="Search" />
                <br />
            </FormGroup>
        </Form>
        </>
    )
}

export default CollectionSearch;
