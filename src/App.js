import React from 'react';
import Header from "./Components/Header";
import Form from "./Components/Form"
import Footer from "./Components/Footer";
import './App.css';

const App = (props) => {
    return (
        <div>
            <Header />

            <Form />

            <Footer />
        </div>
    );
}

export default App;