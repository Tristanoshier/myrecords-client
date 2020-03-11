import React from 'react';
import {Input, Form, FormGroup, Container, Col, Row} from 'reactstrap';

const CollectionSearch = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const filterAlbums = () => {
        let result = document.getElementById('search').value.toLowerCase();
        if (result === ''){
            props.setFilteredAlbums([])
            console.log('search')
        }else {
            let filtered = props.collectionAlbums.filter(album => {
                if(album.name.toLowerCase().includes(result) || album.artist.toLowerCase().includes(result)){
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
                    <Col md="11">
                        <Form onSubmit={handleSubmit} id="form" autoComplete="off">
                            <FormGroup>
                                <Input onChange={filterAlbums} id="search" type="text" placeholder="Search Albums" />
                                <br />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md="1"></Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default CollectionSearch;
