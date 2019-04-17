import React, { useState, useEffect } from "react";
import QrReader from "react-qr-reader";
import { Modal } from "antd";
import { NavBar } from "antd-mobile";
import Axios from "axios";
//import { liffHelper } from "../../App";

// Code in the dark, LINE URL scheme
// Code in the dark, return locker

const Deposit = () => {
  const [{ result, delay }, setQRCode] = useState({ result: "", delay: 300 });
  const [showModal, setModal] = useState(false);
  const [accessCode, setAccessCode] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
    const location = window.location.href;
    const indexOfEqual = location.indexOf("=");
    initAxiosLineErrorHandling();

    if (indexOfEqual !== -1) {
      const accessCode = location.substring(indexOfEqual + 1);
      setAccessCode(accessCode);
    } else {
      openLocker();
    }

    return function cleanup() {
      document.body.style.backgroundColor = "";
      //setAxiosErrorHandlingToDefault();
    };
  }, []);

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
      try {
        await Axios.post(`/locker-instance/unlock`, {
          accessCode: accessCode
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else {
      try {
        await Axios.post(`/locker-instance/createInstance`, {
          accessCode: accessCode
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    setModal(false);
    //liffHelper.closeLiff();
  };
  console.log(accessCode, "accessCode");
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
        {result}
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

function showError() {
  Modal.error({
    title: "Authentication error",
    content: "You are not authorized to access this locker!"
  });
}

const initAxiosLineErrorHandling = () => {
  Axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status === 401 || error.response.status === 403) {
        showError();
      }
      return error;
    }
  );
};

const setAxiosErrorHandlingToDefault = () => {
  Axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status === 401) {
        window.location.href = "https://10e2f066.ngrok.io/auth/lineLoginPage";
      }
      return error;
    }
  );
};
