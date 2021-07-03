import React, { Component } from "react";
import Tabel from "./Tabel";
import { Container, Breadcrumb, Row, Col, Spinner, Tab, Tabs, Button, OverlayTrigger, Popover, Collapse } from "react-bootstrap";

class Content extends Component {

    constructor(){
        super();
        this.state = {
            open: false
        };

        this.setOpen = this.setOpen.bind(this);
    }

    setOpen(){
        this.setState({open: !this.state.open});
    }

  render(){

    const popover = 
        <Popover title="Informasi Website">
            Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
        </Popover>;

    return (
        <div>
            <Container className="mb-4">
                <Row className="justify-content-end">
                    <Col md={4}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                Liga Inggris
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>                  
                </Row>

                <Row>
                    <Col md={6}>
                        <h2>Rumor Transfer Pemain</h2>
                    </Col>
                    <Col className="text-right" md={6}>
                        <span>
                            <Spinner animation="border" variant="success" />
                            <Spinner animation="grow" variant="success" />
                        </span>
                    </Col>
                </Row>

                <Tabs defaultActiveKey="transfer" className="mb-3 nav-justified text-center">
                    <Tab eventKey="transfer" title="Semua Transfer">
                        <Tabel/>
                    </Tab>
                    <Tab eventKey="primer" title="Liga Primer Inggris">
                        
                    </Tab>
                    <Tab eventKey="serie" title="Serie A">
                        
                    </Tab>
                    <Tab eventKey="primera" title="Divisi Primera">
                        
                    </Tab>
                    <Tab eventKey="bundesliga" title="Bundesliga">
                        
                    </Tab>
                    <Tab eventKey="liga1" title="Liga 1 Indonesia">
                        
                    </Tab>
                </Tabs>

                <span>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Button className="mr-2 mb-4" variant="primary">Informasi</Button>
                    </OverlayTrigger>
                    <Button className="mr-2 mb-4" variant="primary" onClick={this.setOpen} aria-expanded={this.state.open}>
                        Versi Website
                    </Button>
                    <Collapse in={this.state.open}>
                        <p>Akses Sport V1.0</p>
                    </Collapse>
                </span>
            </Container>
        </div>
    );
  }
}

export default Content;
