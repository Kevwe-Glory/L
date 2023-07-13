import React from 'react'

const Categories = () => {
    const foodCategories = []
    return (
        <>
        <h2>Food Categories:</h2>
        <ul>
            {foodCategories.map((food, index) => (
            <li key={index}>{food}</li>
            ))}
        </ul>
        </>
    )
}

export default Categories