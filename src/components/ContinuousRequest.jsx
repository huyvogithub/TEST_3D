// File ContinuousRequest.js

import React, { useEffect } from 'react';
import axios from 'axios';

const ContinuousRequest = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('https://ap-southeast-1.aws.data.mongodb-api.com/app/data-tqlme/endpoint/GETAGG')
                .then(response => {
                    console.log(response.data); // Xử lý dữ liệu nếu cần
                })
                .catch(error => {
                    console.error('Error:', error); // Xử lý lỗi nếu có
                });
        }, 10);

        // Xóa interval khi component unmount
        return () => clearInterval(interval);
    }, []);

    return null; // Hoặc có thể trả về JSX tùy ý
};

export default ContinuousRequest;
