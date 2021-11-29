import React from "react"

export default class RestaurantContainer extends Component {
    state = {
        restaurants: [],
        startIndex: 0,
        progress: 0,
        startIndex: 0
    }

    fetchRestaurants = (getRestaurant) => {

        fetch('xxxxx.com/getRestaurant')
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                restaurants: data.Search,
                progress: 0,
                startIndex: 0
            })
        })
    }
}