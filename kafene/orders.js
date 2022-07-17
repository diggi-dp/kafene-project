let orderData = [];

const tbody = document.getElementById('tbody')
const newCheckbox = document.getElementById('new')
const packedCheckbox = document.getElementById('packed')
const intransitCheckbox = document.getElementById('intransit')
const deliveredCheckbox = document.getElementById('delivered')

// renderOrderData 
function renderOrderData(orderData) {

    for (let i = 0; i < orderData.length; i++) {
        let currentorderData = orderData[i];
        let tr = document.createElement('tr')
        tr.classList.add('Homepage_TableRow');
        console.log(currentorderData)
        tr.innerHTML = `
<td class="Homepage_SecondaryText">${currentorderData.id}</td>
<td class="Homepage_PrimaryText">${currentorderData.customerName}</td>
<td class="Homepage_PrimaryText">${currentorderData.orderDate}<br>
   <span class="Homepage_SecondaryText">${currentorderData.orderTime}</span>
   </td>
<td class="Homepage_SecondaryText">$${currentorderData.amount}</td>
<td class="Homepage_PrimaryText">${currentorderData.orderStatus}</td>
`
        tbody.append(tr);
    }
}





fetch(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders`)
    .then(response => response.json())
    .then((data) => {
        orderData = data;
        renderOrderData(orderData);
    })
    .catch((error) => {
        console.log(error);
    })