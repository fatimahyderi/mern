import axios from 'axios';
import react , {useEffect , useState} from 'react';

const Header = () => {

    const [products,getProduct] = useState();

    const getProductData = () => {
        axios.get('http://localhost:8080/items')
            .then(function (response) {
            // handle success
            getProduct(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    }

    useEffect(() => {
        getProductData()
    },[]);

       return(
       <>
       <h1>Item List</h1>
<table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Brand</th>
            </tr>
        </thead>
        <tbody>
            {products && products.map((data))}
                <tr>
                    <td>
                        {products.name}
                    </td>
                    <td>
                        {products.color}
                    </td>
                    <td>
                       {products.brand}
                    </td>
                </tr>
        </tbody>
    </table>
</>
    ) 
       
    
}
export default Header;