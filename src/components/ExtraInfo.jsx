import React from "react";
import styles from "./ExtraInfo.module.css";

export default function ExtraInfo({ data }) {
  if (!data) {
    return;
  }
  const forecastDay = data.forecast.forecastday[0]
  let sunrise = forecastDay.astro.sunrise
  sunrise = sunrise.substring(1)
  let sunset = forecastDay.astro.sunset
  sunset = sunset.substring(1)
  return (
    <div className={styles.extraInfo}>
      <div className={styles.gridItem}>
        <p>{forecastDay.day.maxtemp_c}°C</p>
        <p>High</p>
      </div>
      <div className={styles.gridItem}>
        <p>{sunrise}</p>
        <p>Sunrise</p>
      </div>
      <div className={styles.gridItem}>
        <p>{forecastDay.day.mintemp_c}°C</p>
        <p>Low</p>
      </div>
      <div className={styles.gridItem}>
        <p>{sunset}</p>
        <p>Sunset</p>
      </div>
    </div>
  );
}
