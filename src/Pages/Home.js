import { Container, Row, Col } from "react-bootstrap";
import  UserForm from '../Components/UserForm';
import UserList from "../Components/UserList";




const Home = () => {

  return (
    <>
    
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <UserForm/> 
          </Col>
          <Col xs={6} md={2} className="box">
            <UserList/>
          </Col>
        </Row>
      </Container>
    </>
  );
};





export default Home;