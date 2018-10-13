import React from 'react';
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Card,
  CardText
} from 'reactstrap';

import './bio-item.css'
import overviewBg from '../images/overview_bg.jpg'

// I'm too lazy to change API code to allow updating data
//
// I'm using loopback server with SQLite database on server
// but updating is restricted on public API server
let fixAvatar = (url) => {
  return url.replace('3000', '3001');
}

const imgStyle = {
  backgroundImage: "url(" + overviewBg + ")"
}

const cardStyle = {
  overflow: "hidden"
}

const columnStyle = {
  padding: '20px'
}

const avatarStyle = {
  marginRight: '20px'
}

let BioItem = ({ bio }) => (
  bio ?
    <Card style={cardStyle}>
      <Row>
        <Col sm="6" style={imgStyle}>
          <div style={columnStyle}>
            <img src={fixAvatar(bio.avatarUrl)} style={avatarStyle} alt="" className="rounded-circle avatar" align="left" />
            <CardText>{bio.firstName} {bio.lastName}</CardText>
            <br />
            <a className="a-dark" href={bio.linkedInUrl} target="_blank">LinkedIn</a>
            <br />
            <a className="a-dark" href={'mailto:' + bio.email}>{bio.email}</a>
          </div>
        </Col>
        <Col sm="6">
          <div style={columnStyle}>
            <CardText className="text-black" dangerouslySetInnerHTML={{ __html: bio.curriculumVitae }} />
          </div>
        </Col>
      </Row>
    </Card > :
    null
)

const mapStateToProps = (state) => ({
  bio: state.bioReducer.bio ? state.bioReducer.bio[0] : null
})

BioItem = connect(mapStateToProps, null)(BioItem)
export default BioItem;