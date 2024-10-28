import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';

const api = "https://shop-pd211-awdhcvf3ebdpb7es.polandcentral-01.azurewebsites.net/api/products/all";

const columns = [
    {
        title: 'Image',
        dataIndex: 'imageUrl',
        key: 'image',
        render: (text, i) => <img height={40} src={text} alt={i.title}></img>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount',
    },
    {
        title: 'Stock',
        key: 'stock',
        dataIndex: 'stock',
        render: (_, record) => (
            record.quantity > 0 ?
                <Tag color="green">Available {record.quantity}</Tag>
                :
                <Tag color="volcano">Out of Stock</Tag>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // code...
        fetch(api).then(res => res.json()).then(data => setProducts(data));
    }, []);

    return (<Table columns={columns} dataSource={products} />)
}

export default ProductList;