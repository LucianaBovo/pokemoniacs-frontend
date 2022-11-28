import React, { useEffect, useState } from 'react'

const PokeCategory = ( {onInputChange}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            try {
                const categories = await fetch('https://api.pokemontcg.io/v2/types');
                const results = await categories.json();
                console.log(results.data)
                if(results.data !== 'undefined')
                setCategories(results.data);
            }
            catch (err) {
                console.log(err)
            };
        }
        getCategories()
    }, [])




    //     const res = fetch('https://api.pokemontcg.io/v2/types');

    //    res.then(data =>(data.json())).then(res => console.log(res.data))

    return (
       
        <div>
            {categories.map((category, index) =>
<input key={index} type="text"  name= "pokeCategory"  value={category} onChange={onInputChange} />
                )}
        </div>
       
    )
}

export default PokeCategory
