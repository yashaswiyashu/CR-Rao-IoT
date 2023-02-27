import React from "react";
import styles from "./Desktop2.module.css";

const Component = () => {
  return (
    <div className={styles.desktop2}>
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.groupWrapper}>
            <div className={styles.groupWrapper}>
              <div className={styles.groupWrapper}>
                <div className={styles.groupChild} />
                <div className={styles.cWrapper}>
                  <div className={styles.c}>31.23°C</div>
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
                  <div className={styles.div}>12.34  %</div>
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
    </div>
  );
};

export default Component;
