let usersData = [];

const tbody = document.getElementById('tbody')

// renderProductData 
function renderUsersData(usersData) {
    for (let i = 0; i < usersData.length; i++) {
        let currentUsersData = usersData[i];
        let tr = document.createElement('tr')
        tr.classList.add('Homepage_TableRow');
        tr.innerHTML = `
        <td class="UserList_SecondaryText">${currentUsersData.id}</td>
        <td class="UserList_PrimaryText">
            <img src="${currentUsersData.profilePic}"
                alt="Profile Pic">
        </td>
        <td class="UserList_SecondaryText">${currentUsersData.fullName}</td>
        <td class="UserList_PrimaryText">${currentUsersData.dob}</td>
        <td class="UserList_SecondaryText">${currentUsersData.gender}</td>
        <td class="UserList_SecondaryText">${currentUsersData.currentCity}, ${currentUsersData.currentCountry}</td>
        `
        tbody.append(tr);
    }
}



fetch(`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users`)
.then(response => response.json())
.then((data) => {
    usersData = data;
    renderUsersData(usersData);
})
.catch((error) => {
    console.log(error);
})

   