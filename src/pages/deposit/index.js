import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { Modal } from "antd";

const Deposit = () => {
  const [{ result, delay }, setQRCode] = useState({ result: "", delay: 300 });
  const [showModal, setModal] = useState(false);
  const afterScan = function(data) {
    if (data === null) return;
    setQRCode({ result: data, delay: 300 });
    setModal(true);
  };
  return (
    <div>
      <Modal
        visible={showModal}
        maskClosable={true}
        centered={true}
        onCancel={() => {
          setModal(false);
          window.location.replace("https://line.me/R/ti/p/f4TRdbATay");
        }}
        onOk={() => {
          setModal(false);
          window.location.replace("https://line.me/R/ti/p/f4TRdbATay");
        }}
      >
        {result}
      </Modal>
      <h1> This is deposit </h1>
      <div style={{ width: 250, height: 250 }}>
        <QrReader
          delay={delay}
          onError={err => console.log(err)}
          onScan={data => {
            afterScan(data);
          }}
        />
      </div>
      <p> {result}</p>
    </div>
  );
};

export default Deposit;
