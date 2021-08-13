import React from 'react';
import AnimalsCollection from '../../components/animals-collection/animals.collection.component';

import ANIMALS_DATA from "./animals.data";

class Animals extends React.Component {
    constructor() {
        super();
    
        this.state = {
            collections: ANIMALS_DATA,
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page d-flex flex-wrap">
            {collections.map(({ id, ...otherCollectionProps }) => (
                 <AnimalsCollection key={id} {...otherCollectionProps} />
            ))}
            </div>
        );
    }
}

export default Animals;
