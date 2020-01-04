import React from 'react';
import '../App.css';

const Employee = (props) => {

    return (
        <div className={"center"}>
            <table width="100%" cellPadding="5px">
                <tbody>
                    <tr>
                        <td align={"right"} style={{width: 100}}>Fist Name:</td>
                        <td align={"left"}>{props.firstName}</td>
                    </tr>
                    <tr>
                        <td align={"right"} style={{width: 100}}>Last Name:</td>
                        <td align={"left"}>{props.lastName}</td>
                    </tr>
                    <tr>
                        <td align={"right"} style={{width: 100}}>Last:</td>
                        <td align={"left"}>{props.email}</td>
                    </tr>

                </tbody>
            </table>
        </div>

    )
}

export default Employee;
