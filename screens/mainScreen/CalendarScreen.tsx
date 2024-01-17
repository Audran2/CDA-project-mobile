import React, { useRef, useCallback } from "react";
import { StyleSheet } from "react-native";
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
import AgendaItem from "./AgendaItem";
import { LinearGradient } from "expo-linear-gradient";

setFrenchConfig();

const leftArrowIcon = require("../../components/calendarFiles/previous.png");
const rightArrowIcon = require("../../components/calendarFiles/next.png");
const ITEMS: any[] = agendaItems;

interface Props {
  weekView?: boolean;
}

export default function CalendarScreen(props: Props): JSX.Element {
  const { weekView } = props;
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor,
  });

  const renderItem = useCallback(({ item }: any) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      start={{ x: 0.5, y: 0.8 }}
      end={{ x: 0.5, y: 0 }}
      colors={["#0A0726", "#0E008D"]}
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
