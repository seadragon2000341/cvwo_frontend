import React from "react";
import { filterAction }  from "../Actions/filterAction"
import { Link , useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default () => {
    const dispatch = useDispatch();
    const onChange = event => {
        dispatch(filterAction(event.target.value))
    }
    return(
        <div>
            <select onChange={e => onChange(e)}>
                    <option>NONE</option>
						<option value="name_asc">Task Name A-Z</option>
						<option value="name_desc">Task Name Z-A</option>
                <option value="date_asc">Due Date Earliest-Latest</option>
                <option value="date_desc">Due Date Latest-Earliest</option>
					</select>
        <button onClick={()=>console.log(2)}>clickme</button>
    </div>
    )

}