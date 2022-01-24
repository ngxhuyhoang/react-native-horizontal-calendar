import React, { useState } from 'react';
import HorizontalCalendar from 'react-native-horizontal-calendar';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <HorizontalCalendar
      selectedDate={selectedDate}
      setSelectedDate={(date) => {
        setSelectedDate(date);
      }}
    />
  );
}
