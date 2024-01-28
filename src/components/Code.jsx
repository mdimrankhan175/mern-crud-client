import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled components
const HomeContainer = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
`;


const Main = styled.main`
  margin-bottom: 40px;
`;

const HeroSection = styled.section`
 
background: radial-gradient(#f588d8, #c0a3e5);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;

  h2 {
    color: #333;
  }

  p {
    color: #666;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;

  .feature1 {
    background: radial-gradient(#1fe4f5, #3fbafe);
    padding: 20px;
    border-radius: 8px;
    margin: 0 10px;

    h3 {
      color: #333;
    }

    p {
      color: #666;
    }
  }

  .feature2 {
    background: radial-gradient(#fbc1cc, #fa99b2);
    padding: 20px;
    border-radius: 8px;
    margin: 0 10px;

    h3 {
      color: #333;
    }

    p {
      color: #666;
    }
  }

  .feature3 {
    background: radial-gradient(#76b2fe, #b69efe);
    padding: 20px;
    border-radius: 8px;
    margin: 0 10px;

    h3 {
      color: #333;
    }

    p {
      color: #666;
    }
  }

  .feature4 {
    background: radial-gradient(#60efbc, #58d5c9);
    padding: 20px;
    border-radius: 8px;
    margin: 0 10px;

    h3 {
      color: #333;
    }

    p {
      color: #666;
    }
  }


`;



const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 0 0 8px 8px;
`;




const Code = () => {

    let navigate=useNavigate();

    const getStart= () => {
        navigate('/add');
    }

  return (
    <HomeContainer>
      <Header>
        <h1>Welcome to My MERN CRUD App</h1>
      </Header>
      <Main>
        <HeroSection>
          <h2>Explore and Manage Your Data</h2>
          <p>This app allows you to perform CRUD operations on your data.</p>
          <button onClick={()=>getStart()}>Get Started</button>
        </HeroSection>
        <FeaturesSection>
          <div className="feature1">
            <h3>View</h3>
            <p>See your data at a glance with a user-friendly interface.</p>
          </div>
          <div className="feature2">
            <h3>Edit</h3>
            <p>Edit your data with ease using our intuitive editing tools.</p>
          </div>
          <div className="feature3">
            <h3>Add</h3>
            <p>Add new data entries effortlessly and keep your records up-to-date.</p>
          </div>
          <div className="feature4">
            <h3>Delete</h3>
            <p>Remove unwanted data entries with just a click.</p>
          </div>
        </FeaturesSection>
      </Main>
      <Footer>
        <p>© 2024 MERN CRUD App. All rights reserved.</p>
      </Footer>
    </HomeContainer>
  );
};

export default Code;
