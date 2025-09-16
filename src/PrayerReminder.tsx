import React, { useEffect, useState } from "react";
import axios from "axios";

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

const PrayerReminder: React.FC = () => {
  const [times, setTimes] = useState<PrayerTimes | null>(null);
  const [nextPrayer, setNextPrayer] = useState<string | null>(null);
  const [adhanAudio] = useState<HTMLAudioElement>(
    new Audio("https://ia600703.us.archive.org/15/items/90---azan---90---azan--many----sound----mp3---alazan/007--.mp3") // مثال صوت الأذان
  );

  // جلب مواقيت الصلاة
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const res = await axios.get(
          "https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5"
        );
        const data = res.data.data.timings;

        setTimes({
          Fajr: data.Fajr,
          Dhuhr: data.Dhuhr,
          Asr: data.Asr,
          Maghrib: data.Maghrib,
          Isha: data.Isha,
        });
      } catch (error) {
        console.error("خطأ في جلب مواقيت الصلاة", error);
      }
    };

    fetchPrayerTimes();
  }, []);

  // التذكير بوقت الصلاة
  useEffect(() => {
    if (!times) return;

    const interval = setInterval(() => {
      const now = new Date();
      const current = `${now.getHours()}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;

      for (const [name, time] of Object.entries(times)) {
        if (time.startsWith(current)) {
          setNextPrayer(name);
          adhanAudio.play().catch(() =>
            console.log("المتصفح منع التشغيل التلقائي")
          );
          alert(`🔔 حان الآن وقت صلاة ${name}`);
        }
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [times, adhanAudio]);

  return (
    <div className="prayer-reminder">
      <h2>🕌 مواقيت الصلاة</h2>
      {times ? (
        <ul>
          <li>الفجر: {times.Fajr}</li>
          <li>الظهر: {times.Dhuhr}</li>
          <li>العصر: {times.Asr}</li>
          <li>المغرب: {times.Maghrib}</li>
          <li>العشاء: {times.Isha}</li>
        </ul>
      ) : (
        <p>جاري تحميل المواقيت...</p>
      )}
      {nextPrayer && <p> حان الآن وقت صلاة {nextPrayer}</p>}
    </div>
  );
};

export default PrayerReminder;
