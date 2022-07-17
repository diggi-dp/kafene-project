let productData = [];

const tbody = document.getElementById('tbody')
const newCheckbox = document.getElementById('expired')
const packedCheckbox = document.getElementById('low-stock')


// renderProductData 
function renderProductsData(productData) {

    for (let i = 0; i < productData.length; i++) {
        let currentproductData = productData[i];
        let tr = document.createElement('tr')
        tr.classList.add('Homepage_TableRow');
        tr.innerHTML = `
<td class="Homepage_SecondaryText">${currentproductData.id}</td>
<td class="Homepage_PrimaryText">${currentproductData.medicineName}</td>
<td class="Homepage_PrimaryText">${currentproductData.medicineBrand}</td>
<td class="Homepage_SecondaryText">$${currentproductData.expiryDate}</td>
<td class="Homepage_PrimaryText">${currentproductData.unitPrice}</td>
<td class="Homepage_PrimaryText">${currentproductData.stock}</td>
`
        tbody.append(tr);
    }
}





fetch(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products`)
    .then(response => response.json())
    .then((data) => {
        productData = data;
        renderProductsData(productData);
    })
    .catch((error) => {
        console.log(error);
    })

   