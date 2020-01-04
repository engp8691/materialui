import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

export const fetchEmployees = async data => {
    const response = await axios.get("http://localhost:8080/employees/");
    return response.data;
};

export const addEmployee = async data => {
    console.log(data[0]);

    const response = await axios({
        method: 'POST',
        url: "http://localhost:8080/employees/",
        data: data[0],
        headers:{'Content-Type': 'application/json; charset=utf-8'}
    });

    return response.data;
};

export const fetchEmployeeByID = async id => {
    const response = await axios.get(`http://localhost:8080/employees/${id}`);
    return response.data;
};

export const deleteEmployee = async id => {
    const response = await axios.delete(`http://localhost:8080/employees/${id}`);
    return response.data;
};
