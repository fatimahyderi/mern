const Table = () => {
   <>
  <h2>Data Inventory</h2>
        <table>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Brand</th>
              <th>Product Model</th>
              <th>Edit Product</th>
              <th>Delete Product</th>
            </tr>
            <tr>
              <td>Product</td>
              <td>Name</td>
              <td><                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          %= products.brand %></td>
              <td><%= products.model %></td>
              <td><a href="http://localhost:8080/edit/<%=products._id%>" class="addbutton"
                data-toggle="modal">Edit</a></td>
              <td><a href="http://localhost:8080/delete/<%=products._id%>" class="addbutton"
                data-toggle="modal">Delete</td>

            </tr>
            <% }) %>
          </table>
          <div class="" style="margin:20px">
            <h3><a href="http://localhost:8080/add" class="addbutton"
              data-toggle="modal">Add Product</a></h3>
          </div>
          
          
          <%- include('includes/footer'); -%>
</html>
}