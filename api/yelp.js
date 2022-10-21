import axios from "axios";

export default axios.create(
    {
        baseURL:'https://api.yelp.com/v3/businesses',
        headers:{
            Authorization :'Bearer XOSDj9-GIWuKwzfLup36UunBPbtdDuIFXQr3qQWuEF95EYBRAeW2QTyMWjB9CEmYK-Es3G2bwVpbDeV0sdnC3aQ5pKCIryyQwm6X1Xks7XzbTZsKfyCT5k-p3XukYXYx '
        }
    }
);