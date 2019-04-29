import React, { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import { Modal } from "antd";
import { NavBar } from "antd-mobile";
import Axios from "axios";
import { liffHelper } from "../../App";

function triggerErrorModal() {
  Modal.error({
    title: "There is an error occured",
    content: "You are not authorized"
  });
}
const Deposit = () => {
  const [{ result, delay }, setQRCode] = useState({ result: "", delay: 300 });
  const [showModal, setModal] = useState(false);
  const [accessCode, setAccessCode] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
    const location = window.location.href;
    const indexOfEqual = location.indexOf("=");
    if (indexOfEqual !== -1) {
      const accessCode = location.substring(indexOfEqual + 1);
      setAccessCode(accessCode);
      setModal(true);
    }
    return function cleanup() {
      document.body.style.backgroundColor = "";
    };
  });

  const afterScan = function(data) {
    if (data === null) return;
    const indexOfEqual = data.indexOf("=");
    const achievedAccessCode = data.substring(indexOfEqual + 1);
    setAccessCode(achievedAccessCode);
    setQRCode({ result: data, delay: 300 });
    setModal(true);
  };

  const openLocker = async () => {
    const {
      data: { isInUsed }
    } = await Axios.get(`/locker-instance/isInUsed?accessCode=${accessCode}`);
    if (isInUsed) {
      Axios.post(`/locker-instance/unlock`, {
        accessCode: accessCode
      })
        .then(res => console.log(res))
        .catch(error => {
          console.log(error.response, "error response");
          triggerErrorModal();
        });
    } else {
      Axios.post(`/locker-instance/createInstance`, {
        accessCode: accessCode
      })
        .then(res => console.log(res))
        .catch(error => {
          console.log(error.response, "error response");
          triggerErrorModal();
        });
    }
    setModal(false);
    liffHelper.closeLiff();
  };
  console.log(result, "result");
  return (
    <div>
      <NavBar mode="dark">Open Locker</NavBar>
      <Modal
        visible={showModal}
        maskClosable={true}
        centered={true}
        onCancel={() => {
          setModal(false);
        }}
        onOk={openLocker}
      >
        {accessCode && "Do you want to open this locker?"}
      </Modal>
      <div style={{ height: "15vh" }} />
      <QrReader
        delay={delay}
        onError={err => console.log(err)}
        onScan={data => {
          afterScan(data);
        }}
      />
      <p
        style={{
          marginTop: 24,
          color: "white",
          padding: 24,
          fontSize: "1.1em",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        Line up the QR code to scan it with your device's camera.
      </p>
    </div>
  );
};

export default Deposit;
