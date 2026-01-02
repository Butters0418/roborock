// react 相關
import { useEffect, useState, useCallback, useMemo } from 'react';
import dayjs from 'dayjs';

// styles
import {
  SCountdownWrap,
  SCountdownTitle,
  SCountdownContent,
  SCountdownGrid,
  STimeUnit,
  STimeUnitCenter,
  STimeSvg,
} from './style';

// 常數定義
const SECONDS_IN_DAY = 86400;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;
const SVG_DASH_ARRAY = 565;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE_FULL = 60;

function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    diffDays: 1,
  });

  const [titles, setTitles] = useState({
    main: '超早鳥預購優惠倒數',
    sub: '僅此一檔錯過不在',
  });

  const timeData = useMemo(
    () => [
      {
        endTime: '2026-01-01 10:00:00',
        titleText: 'S8新品首賣日',
        subTitle: '僅此一回 錯過不再-',
      },
      {
        endTime: '2026-01-30 12:00:00',
        titleText: '超早鳥限量組 ',
        subTitle: '手刀下單結帳現折$3000',
      },
      {
        endTime: '2026-02-28 11:59:59',
        titleText: '超早鳥限量組，優惠延燒中',
        subTitle: '手刀下單結帳現折$2400',
      },
    ],
    [],
  );

  const startCountDown = useCallback(
    (endTime) => {
      const intervalId = setInterval(() => {
        const endSecond = dayjs(endTime).unix();
        const nowSecond = endSecond - dayjs().unix();

        if (nowSecond >= 0) {
          const countDay = Math.floor(nowSecond / SECONDS_IN_DAY);
          const countHour =
            Math.floor(nowSecond / SECONDS_IN_HOUR) % HOURS_IN_DAY;
          const countMin =
            Math.floor(nowSecond / SECONDS_IN_MINUTE) % MINUTES_IN_HOUR;
          const countSecond = nowSecond % SECONDS_IN_MINUTE_FULL;

          setCountdown({
            days: countDay,
            hours: countHour,
            minutes: countMin,
            seconds: countSecond,
            diffDays: countdown.diffDays,
          });
        } else {
          clearInterval(intervalId);
        }
      }, 1000);

      return intervalId;
    },
    [countdown.diffDays],
  );

  useEffect(() => {
    const today = dayjs();

    // 尋找目標時間
    const endTimeTarget = timeData.find((item) =>
      today.isBefore(dayjs(item.endTime)),
    );

    if (!endTimeTarget) return;

    // 更新標題
    setTitles({
      main: endTimeTarget.titleText,
      sub: endTimeTarget.subTitle,
    });

    // 計算天數分母
    const targetIndex = timeData.indexOf(endTimeTarget);
    let diffDay = 1;

    if (targetIndex > 0) {
      const targetBefore = timeData[targetIndex - 1];
      const date1 = dayjs(endTimeTarget.endTime).format('YYYY-MM-DD');
      const date2 = dayjs(targetBefore.endTime).format('YYYY-MM-DD');
      diffDay = dayjs(date1).diff(dayjs(date2), 'day') || 1;
    } else {
      // 第一個時間段，使用當前時間到結束時間的天數
      diffDay = dayjs(endTimeTarget.endTime).diff(dayjs(), 'day') || 1;
    }

    setCountdown((prev) => ({ ...prev, diffDays: diffDay }));

    // 開始倒數
    const intervalId = startCountDown(endTimeTarget.endTime);

    // 清理 interval
    return () => clearInterval(intervalId);
  }, [timeData, startCountDown]);

  // 時間單位
  const timeUnits = useMemo(
    () => [
      {
        id: 'day',
        value: countdown.days,
        label: '天',
        max: countdown.diffDays,
      },
      {
        id: 'hour',
        value: countdown.hours,
        label: '小時',
        max: HOURS_IN_DAY,
      },
      {
        id: 'minute',
        value: countdown.minutes,
        label: '分',
        max: MINUTES_IN_HOUR,
      },
      {
        id: 'second',
        value: countdown.seconds,
        label: '秒',
        max: SECONDS_IN_MINUTE_FULL,
      },
    ],
    [countdown],
  );

  return (
    <SCountdownWrap>
      {/* 大小標題 */}
      <SCountdownTitle>{titles.main}</SCountdownTitle>
      <SCountdownContent>
        <p>{titles.sub}</p>
        <SCountdownGrid>
          {timeUnits.map((unit) => (
            <STimeUnit key={unit.id}>
              <div className="time-circle">
                <STimeSvg
                  id={`svg-${unit.id}`}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="88"
                    cx="100"
                    cy="100"
                    fill="transparent"
                    stroke="black"
                    strokeDasharray={SVG_DASH_ARRAY}
                    strokeDashoffset="0"
                  />
                  <circle
                    className="bar"
                    r="88"
                    cx="100"
                    cy="100"
                    fill="transparent"
                    strokeDasharray={SVG_DASH_ARRAY}
                    strokeDashoffset={
                      SVG_DASH_ARRAY - SVG_DASH_ARRAY * (unit.value / unit.max)
                    }
                  />
                </STimeSvg>
              </div>
              <STimeUnitCenter>
                <h3>{unit.value}</h3>
                <p>{unit.label}</p>
              </STimeUnitCenter>
            </STimeUnit>
          ))}
        </SCountdownGrid>
      </SCountdownContent>
    </SCountdownWrap>
  );
}

export default Countdown;
