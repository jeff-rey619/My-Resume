import React from "react";
import { Input, Space, Table, Tag , Button } from 'antd';
import axios from "axios";
import { useState, useEffect } from "react";

function Antd (){

  const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showtable , setShowtable] = useState(false);


   const tabdata = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/")
   
    .then(json => {
      console.log(json);
      setDataSource(json.data)
      setLoading(false);
    }
    );
   }


   


   const columns = [
    
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'TITLE',
      dataIndex: 'title',
    },
  ];

  const Showdamndata= () => {
    setShowtable(true);
    tabdata();

  }

    return(
        <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary" onClick={Showdamndata} >
          Sh0w the fukin Data
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
         
        </span>
      </div>
      { showtable ? <Table  loading={loading} columns={columns} dataSource={dataSource} /> : null }
      
    </div>
    );

}

export default Antd;