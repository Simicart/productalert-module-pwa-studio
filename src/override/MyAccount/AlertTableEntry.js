import React from "react";
import {useAlertTableEntry} from "./useAlertTableEntry";

export const AlertTableEntry = props => {
    const data = props ? props.data : null
    const reInitialize = props ? props.reInitialize : null
    const setLoading = props ? props.setLoading : null

    const {product_id, status, subscribe_updated_at, subscriber_id} = data ? data : {}

    const {removeSubscription} = useAlertTableEntry({
        id: subscriber_id,
        reInitialize: reInitialize,
        setLoading: setLoading
    })


    if (!data) {
        return (
            <div/>
        )
    }


    return (
        <tr id={product_id} style={{
            minHeight: 75
            // border: '1px solid #cccccc',
        }}>
            <td style={{borderTop: '1px solid #cccccc', padding: '11px 10px'}}></td>
            <td style={{borderTop: '1px solid #cccccc', padding: '11px 10px'}}></td>
            <td style={{borderTop: '1px solid #cccccc', padding: '11px 10px', textAlign: "center"}}>{status}</td>
            <td style={{
                borderTop: '1px solid #cccccc',
                padding: '11px 10px',
                textAlign: "center"
            }}>{subscribe_updated_at}</td>
            <td style={{borderTop: '1px solid #cccccc', padding: '11px 10px', textAlign: "center"}}>
                <a href={'#'} onClick={removeSubscription} style={{
                    color: "#006bb4",
                }}>Remove</a>
            </td>
        </tr>
    )

}
