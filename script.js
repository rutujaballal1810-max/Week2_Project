async function searchProduct() {
    let name = document.getElementById("search").value;
    let result = document.getElementById("result");

    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let products = await response.json();

        let found = products.filter(p =>
            p.title.toLowerCase().includes(name.toLowerCase())
        );

        if (found.length == 0) {
            result.innerHTML = "Product not found";
        } else {
            result.innerHTML = found.map(p =>
                `<p><b>${p.title}</b><br>Price: $${p.price}</p>`
            ).join("");
        }

    } catch (error) {
        result.innerHTML = "Error loading products";
    }
}
