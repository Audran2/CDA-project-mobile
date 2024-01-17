import React, { useRef, useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";
import testIDs from "../../components/calendarFiles/testIDs";
import {
  agendaItems,
  getMarkedDates,
} from "../../components/calendarFiles/agendaItems";
import { getTheme, themeColor } from "../../components/calendarFiles/theme";
import setFrenchConfig from "../../components/calendarFiles/LocalConfig";
import { colors } from "../../assets/utils/_colors";
import AgendaItem from "./AgendaItem";

setFrenchConfig();

const leftArrowIcon = require("../../components/calendarFiles/previous.png");
const rightArrowIcon = require("../../components/calendarFiles/next.png");
const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
}

export default function CalendarScreen(props: Props): JSX.Element {
  const { weekView } = props;
  const [eventMockItems, setEventMockItems] = useState<
    Array<{ title: string; data: any }>
  >([]);
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  const renderItem = useCallback(({ item }: any) => {
    const isLastItem =
      eventMockItems.findIndex(
        (ev) =>
          JSON.stringify(ev.data[ev.data.length - 1]) === JSON.stringify(item)
      ) ===
      eventMockItems.length - 1;

    return (
      <AgendaItem
        item={item}
        // isLast={isLastItem}
        // doRefresh={() => {
        //   onRefresh();
        // }}
      />
    );
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={[colors.darkblue, colors.blue]}
    >
      <CalendarProvider
        date={ITEMS[1]?.title}
        showTodayButton
        theme={todayBtnTheme.current}
      >
        {weekView ? (
          <WeekCalendar
            testID={testIDs.weekCalendar.CONTAINER}
            firstDay={1}
            markedDates={marked.current}
          />
        ) : (
          <ExpandableCalendar
            testID={testIDs.expandableCalendar.CONTAINER}
            theme={theme.current}
            firstDay={1}
            markedDates={marked.current}
            leftArrowImageSource={leftArrowIcon}
            rightArrowImageSource={rightArrowIcon}
            animateScroll
          />
        )}
        <AgendaList
          sections={ITEMS}
          renderItem={renderItem}
          sectionStyle={styles.section}
        />
      </CalendarProvider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  section: {
    backgroundColor: "transparent",
    color: "white",
  },
});
