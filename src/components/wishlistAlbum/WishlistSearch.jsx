import React from 'react';
import {Input, Form, FormGroup, Container, Col, Row, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const WishlistSearch = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const filterAlbums = () => {
        let result = document.getElementById('search').value.toLowerCase();
        if (result === ''){
            props.setFilteredAlbums([])
        }else {
            let filtered = props.wishlistAlbums.filter(album => {
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
                                <Input className="auth-form-bg" onChange={filterAlbums} id="search" type="text" placeholder="Search Albums" />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col md="3"> 
                        <FontAwesomeIcon size="2x" className="add-btn" icon={faPlus} onClick={() => {props.editCreateWishlistAlbum(props.wishlistAlbum); props.createOn()}}/>    
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default WishlistSearch;
