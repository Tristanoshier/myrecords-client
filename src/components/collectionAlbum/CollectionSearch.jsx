import React from 'react';
import {Input, Form, FormGroup, Container, Col, Row, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const CollectionSearch = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const filterAlbums = () => {
        let result = document.getElementById('search').value.toLowerCase();
        if (result === ''){
            props.setFilteredAlbums([])
        }else {
            let filtered = props.collectionAlbums.filter(album => {
                if(album.name.toLowerCase().includes(result) || album.artist.toLowerCase().includes(result) || album.year.includes(result)){
                    return album 
                }
            })
            props.setFilteredAlbums(filtered)
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md="9">
                        <Form className="search-form" onSubmit={handleSubmit} id="form" autoComplete="off">
                            <FormGroup>
                                <Input onChange={filterAlbums} id="search" type="text" placeholder="Search Albums" />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md="3"> 
                        <FontAwesomeIcon size="2x" className="add-btn" icon={faPlus} onClick={() => {props.editCreateCollectionAlbum(props.collectionAlbum); props.createOn()}}/>    
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default CollectionSearch;
