import React from 'react'
import { Badge, Stack } from 'react-bootstrap'
import ShopByIsle from '../ShopByIsle'
import ShopByBrand from '../ShopByBrand'
import ShopByCountry from '../ShopByCountry'
import Sales from '../Sales'
import Gifts from '../Gifts'
import Delivery from '../Delivery'
import FAQ from '../FAQ'
import Home from '../Home'
import Recipes from '../Recipes'

const List = () => {
    return (
            <>
                <Stack direction="horizontal" gap={2}>
            <Badge>
                <ShopByIsle />
            </Badge>
            <Badge>
                <ShopByBrand />
            </Badge>
            <Badge>
                <ShopByCountry />
            </Badge>
            <Badge>
                <Sales />
            </Badge>
            <Badge>
                <Gifts />
            </Badge>
            <Badge>
                <Delivery />
            </Badge>
            <Badge>
                <FAQ />
            </Badge>
            <Badge>
                <Home />
            </Badge>
            <Badge>
                <Recipes />
            </Badge>
            </Stack>
            </>
        )
}

export default List