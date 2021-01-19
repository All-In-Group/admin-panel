let clients = [
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave" },
    { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street" },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave" },
    { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street" },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Otto Clay", "Age": 25, "Country": 1, "Address": "Ap #897-1459 Quam Avenue" },
    { "Name": "Connor Johnston", "Age": 45, "Country": 2, "Address": "Ap #370-4647 Dis Av." },
    { "Name": "Lacey Hess", "Age": 29, "Country": 3, "Address": "Ap #365-8835 Integer St." },
    { "Name": "Timothy Henson", "Age": 56, "Country": 1, "Address": "911-5143 Luctus Ave" },
    { "Name": "Ramona Benton", "Age": 32, "Country": 3, "Address": "Ap #614-689 Vehicula Street" }
];

let data_translations = [
    { "id": "x", "key": "x", "value": "x" },
    { "id": "x", "key": "x", "value": "x" },
    { "id": "x", "key": "x", "value": "x" },
    { "id": "x", "key": "x", "value": "x" },
    { "id": "x", "key": "x", "value": "x" },
    { "id": "x", "key": "x", "value": "x" },
    { "id": "x", "key": "x", "value": "x" },
    { "id": "x", "key": "x", "value": "x" }
];

let countries = [
    { Name: "", Id: 0 },
    { Name: "United States", Id: 1 },
    { Name: "Canada", Id: 2 },
    { Name: "United Kingdom", Id: 3 }
];

let products_all_data = [
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
    { "Image": "Images/Flag_USA.svg", "Name": "USA Flag", "Price": "5$", "Status": "Active" },
    { "Image": "Images/Flag_of_Russia.svg", "Name": "Russia Flag", "Price": "4$", "Status": "Active" },
];

//activity table

$("#activity_table").jsGrid({
    width: "80%",
    height: "500px",
    paging: true,
    sorting: true,

    data: clients,

    fields: [
        { name: "Name", type: "text", width: 150 },
        { name: "Age", type: "number", width: 50 },
        { name: "Address", type: "text", width: 200 },
        { name: "Country", type: "select", items: countries, valueField: "Id", textField: "Name" }
    ]
});

//translations table

$("#translations_table").jsGrid({
    width: "80%",
    height: "500px",
    paging: true,
    sorting: true,

    data: data_translations,

    fields: [
        { name: "id", type: "text", width: 150 },
        { name: "key", type: "number", width: 50 },
        { name: "value", type: "text", width: 200 }
    ]
});

//products all table

let products_all_update = $("#products_all_table").DataTable({
    data: products_all_data,
    columns: [
        { data: "Status" },
        { data: "Image" },
        { data: "Name" },
        { data: "Price" },
        { data: "Status" }
    ],
    "lengthMenu": [8],
    "fnCreatedRow": function (row, data, index) {
        $('td', row).eq(0).html(index + 1);
    },
    columnDefs: [
        {
            targets: 1,
            render: function (data) {
                return `<img src="${data}" class="products_all_table_img" />`
            }
        }
    ]
});
