/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const ITEM_WIDTH = 72;
const ITEM_HEIGHT = 72;
const ITEM_OFFSET = ITEM_WIDTH + 18;
interface Props {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

function dateAddDays(date: Date, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getDayString(date: Date): string {
  return date.toString().split(' ')[0];
}

function isSameDay(date1: Date, date2: Date): boolean {
  return date1.getDate() === date2.getDate();
}

function isToday(date: Date): boolean {
  return new Date().getDate() === date.getDate();
}

function generateHorizontalCalendarDates(days: number): Date[] {
  const today = new Date();
  let result = [];
  for (let i = 0; i < days; i++) {
    result[i] = dateAddDays(today, i);
  }

  return result;
}

const HorizontalCalendar = ({ selectedDate, setSelectedDate }: Props) => {
  const dates: Date[] = useMemo(() => {
    return generateHorizontalCalendarDates(14);
  }, []);

  const onDatePress = (date: Date) => {
    setSelectedDate(date);
  };

  const renderItem = ({ item }: { item: Date }) => {
    const dayNumber = item.getDate();
    const monthNumber = item.getMonth() + 1;
    const dayString = getDayString(item);
    const isActive = isSameDay(selectedDate, item);
    return (
      <TouchableOpacity
        onPress={() => onDatePress(item)}
        style={[
          styles.item,
          { borderWidth: 1, borderColor: isActive ? '#FE4014' : '#E8E8E8' },
          isActive && { backgroundColor: 'white' },
        ]}
      >
        <Text style={[styles.dayStyle, isActive && styles.activeText]}>
          {isToday(item) ? 'today' : dayString}
        </Text>
        <View
          style={{
            width: 54,
            height: 1,
            backgroundColor: isActive ? '#FE4014' : '#E8E8E8',
            marginVertical: 8,
          }}
        />
        <Text style={[styles.dateOutput, isActive && styles.activeText]}>
          {dayNumber}/{monthNumber}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={dates}
      renderItem={renderItem}
      keyExtractor={(item) => item.toDateString()}
      horizontal={true}
      contentContainerStyle={[
        { paddingBottom: 16, paddingLeft: 4, paddingRight: 16 },
      ]}
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={dates.length - 8}
      ItemSeparatorComponent={() => <View style={{ width: 18 }} />}
      getItemLayout={(_, index) => ({
        length: ITEM_WIDTH,
        offset: ITEM_OFFSET * index,
        index,
      })}
    />
  );
};

const styles = StyleSheet.create({
  dateOutput: {
    color: '#BDF0CC',
    fontSize: 18,
  },
  dayStyle: {
    color: '#BDF0CC',
    textTransform: 'lowercase',
  },
  activeText: {
    color: '#033F40',
    fontWeight: 'bold',
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});

export default HorizontalCalendar;
