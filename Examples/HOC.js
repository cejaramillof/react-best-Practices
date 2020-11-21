import React, { useState, useEffect } from 'react';
import fetchSource from 'fetchSource';


// HOC
const NewComponent1 = withRouter(Component1);
const NewComponent2 = connect(mapStateToProps, mapDispatch)(Component2);

NewComponent2()
NewComponent1()



const Shoes = ({ fetchShoes, TranslateShoes }) => {
    import { useEffect } from 'react';
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        // fetching logic
        //..
        fetchShoes();
        setShoes();
    }, []);

    return (
        <ul>{shoes.map(shoe => <li>{TranslateShoes(shoe.style)}</li>)}</ul>
    )
}

const Shirts = ({ fetchShirts, TranslateShirts }) => {
    import { useEffect } from 'react';
    const [shirts, setShirts] = useState([]);

    useEffect(() => {
        // fetching logic
        //..
        fetchShirts();
        setShirts();
    }, []);

    return (
        <ul>{shirts.map(shirt => <li>{TranslateShirts(shirt.style)}</li>)}</ul>
    )
}

// High Order Component
const ListContainer = ({ type, Translate, Component }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        // fetching logic
        // ....
        fetchSource(type);
        setData(data);
    }, []);

    return (
        <div>
            <Component data={data} Translate={Translate[type]} />
        </div>
    );
};




const HomePage = ({ Translate }) => {

    return (
        <div>
            <ListContainer type="shoes" Translate={Translate} Component={Shoes} />
            <ListContainer type="shirts" Translate={Translate} Component={Shirts} />
        </div>
    );
};























ListContainer();
HomePage();
