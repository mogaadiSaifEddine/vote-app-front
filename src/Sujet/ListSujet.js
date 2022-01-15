import React, { useState, useEffect } from "react";
import { Table, Card, Button, Form, Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import sujetService from "../service/sujet.service";

const ListSujet = () => {
  const [visible, setVisible] = useState(false);
  const [sujets, setSujets] = useState();
  const [moyenForm] = Form.useForm();
  useEffect(() => {
    getSujet();
  }, []);
  const getSujet = async () => {
    const res = await sujetService.getSujet();
    console.log(res);
    if (res.status === 200) {
      setSujets(res.data.sujets);
    }
  };

  const addSujet = async (values) => {
    const res = await sujetService.addSujet(values);
    console.log(res);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const columns = [
    {
      title: "titre",
      dataIndex: "title",
    },
  ];
  const formAdd = (
    <Form form={moyenForm} onFinish={addSujet}>
      <Form.Item name="title" label="Titre du Sujet ">
        <Input size="large" type="text"></Input>
      </Form.Item>
      <Form.Item name="description" label="description du Sujet ">
        <Input size="large" type="text"></Input>
      </Form.Item>
    </Form>
  );
  return (
    <>
      {" "}
      <Card
        title="liste des Sujet"
        extra={
          <Button onClick={() => setVisible(true)}>Ajouter un sujet </Button>
        }
      >
        {" "}
        <Table columns={columns} dataSource={sujets} />
      </Card>
      <Modal onCancel={handleCancel} onOk={moyenForm.submit} visible={visible}>
        {formAdd}
      </Modal>
    </>
  );
};
export default ListSujet;
