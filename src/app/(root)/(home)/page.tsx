"use client"
import React, { useEffect } from 'react';
import heroBg from "@/assets/images/hero-background.png";
import MeetingTypeList from '@/components/MeetingTypeList';

const HomePage = () => {
  const [time, setTime] = React.useState<string | null>(null);
  const [date, setDate] = React.useState<string | null>(null);

  useEffect(() => {
    // Set initial date and time on component mount
    const updateDateTime = () => {
      const now = new Date();
      const userLang = navigator.language;
      setTime(now.toLocaleTimeString(userLang, { hour: '2-digit', minute: '2-digit' }));
      setDate(new Intl.DateTimeFormat(userLang, { dateStyle: 'full' }).format(now));
    };

    updateDateTime(); // Set initial date and time

    const intervalId = setInterval(() => {
      const now = new Date();
      const newTime = now.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
      setTime(newTime);

      // If it's exactly midnight, update the date
      if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        setDate(new Intl.DateTimeFormat(navigator.language, { dateStyle: 'full' }).format(now));
      }
    }, 1000);

    // Clean up the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div 
        className="h-[300px] w-full rounded-[20px] bg-cover" 
        style={{ backgroundImage: `url(${heroBg.src})` }} 
      >
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
            Upcoming meeting at 12:30 AM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time?.toLocaleUpperCase()}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  );
}

export default HomePage;
