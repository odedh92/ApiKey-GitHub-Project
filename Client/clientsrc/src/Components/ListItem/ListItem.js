import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'

function ListItem() {

    const [pullRequests, setPullRequests] = useState([]);
    useEffect(getPullRequests, []);
    function getPullRequests() {
        axios.get(`http://localhost:3000/webhook`)
            .then(result => {
                setPullRequests(result.data)
                console.log(result.data);
            })
    }
    return (
        <div class="limiter">
            <div class="container-table100">
                <div class="wrap-table100">
                    <div class="table100">
                        <table>
                            <thead>
                                <tr class="table100-head">
                                    <th class="column1">Action</th>
                                    <th class="column3">Id</th>
                                    <th class="column2">Date</th>
                                    <th class="column4">User Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {pullRequests.map(requst =>
                                <tr>
                                    <td class="column1">{requst.action}</td>
                                    <td class="column3">{requst.id}</td>
                                    <td class="column2">{new Date(requst.date).toUTCString().replace('GMT','')}</td>
                                    <td class="column4">{requst.userName}</td>
                                </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListItem

