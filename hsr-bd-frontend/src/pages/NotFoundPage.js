import {Button, Result} from "antd";
import {Link} from "react-router-dom";
import React from "react";

export const NotFoundPage = () => {

    return (
        <Result
            status="404"
            title="404"
            style={{height: '100vh'}}
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
        />
    )
}