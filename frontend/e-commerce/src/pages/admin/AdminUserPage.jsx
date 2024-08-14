import { Table } from "antd";
import { useState, useEffect, useCallback } from "react";

const AdminUserPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${apiUrl}/api/users`);
      const data = await response.json();
      if (response.ok) {
        setDataSource(data)
      } else {
        message.error("giriş başarısız")
      }
      console.log(response)
    } catch (error) {
      console.log("giriş hatası", error)
    } finally {
      setLoading(false)
    }
  }, [apiUrl])

  useEffect(() => {
    fetchUsers()
  }, [])


  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => (
        <img src={imgSrc} alt="AVATAR" style={{
          width: 50,
          borderRadius: "50%"
        }} />
      )
    },
  ];
  return <Table dataSource={dataSource} columns={columns} rowKey={(record) => record._id} loading={loading} />;
};

export default AdminUserPage;
