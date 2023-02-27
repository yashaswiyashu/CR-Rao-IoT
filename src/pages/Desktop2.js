import React, { useEffect, useState } from 'react'
import styles from "./Desktop2.module.css";
import AWS from 'aws-sdk';

const Desktop2 = () => {
  const [Data, setData] = useState({});
  const [temp, setTemp] = useState('');
  const [humid, setHumid] = useState('');
  let awsConfig = {
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "AKIAQJOKZ6BSIRLOTU6U", 
    "secretAccessKey": "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"
  };
  AWS.config.update(awsConfig);
  let docClient = new AWS.DynamoDB.DocumentClient();

  useEffect(() => {
    let fetchAllData = async () => {
      var params = {
        TableName: "RscSys_Iot_table",
        Key: {
            "Device Id": "6532395943",
        }
      };
      await docClient.get(params, function (err, data) {
        if (err) {
          setData(err);
        }
        else {
          if(data !== Data){
            setTemp(parseFloat(data.Item.payload.temp).toFixed(2));
            setHumid(parseFloat(data.Item.payload.humid).toFixed(2));
          }
        }
      })
    }
    fetchAllData();
  }, [temp, humid]);

  return (
    <div className={styles.desktop2}>
      <img className={styles.image1Icon} alt="logo" src="../image-1@2x.png" />
      <h1 className={styles.crraoAdvancedInstitute}>
        C.R.Rao Advanced Institute of Mathematics, Statistics and Computer
        Science (AIMSCS)
      </h1>
      <h1 className={styles.universityOfHyderabad}>
        University of Hyderabad Campus, Gachibowli, Hyderabad – 500046
      </h1>
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupChild} />
                <div className={styles.cWrapper}>
                  <div className={styles.c}>{temp}°C</div>
                </div>
                <div className={styles.groupDiv}>
                <img
                    className={styles.tempicon}
                    alt=""
                    src="../vector.svg"
                  />
                  <div className={styles.temperatureWrapper}>
                    <div className={styles.temperature}>Temperature</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupWrapper1}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupChild} />
                <div className={styles.wrapper}>
                  <div className={styles.div}>{humid}%</div>
                </div>
                <div className={styles.groupDiv}>
                <img className={styles.humidicon} alt="" src="../vector1.svg" />
                  <div className={styles.temperatureWrapper}>
                    <div className={styles.temperature}>{`Humidity `}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.desktop2Child} alt="" src="../rectangle-46.svg" />
      <div className={styles.sensorChannelWrapper}>
        <b className={styles.sensorChannel}>Sensor channel</b>
      </div>
      <div className={styles.noDataFound}>No Data Found</div>
      <div className={styles.sensorData}>Sensor Data</div>
      <div className={styles.desktop2Item} />
      {/* <img className={styles.vectorIcon2} alt="" src="../vector2.svg" /> */}
    </div>
  );
};

export default Desktop2;
