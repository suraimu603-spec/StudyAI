/**
 * 日付ユーティリティ関数
 */

import { format, parse, differenceInDays, startOfWeek, endOfWeek, parseISO } from 'date-fns';
import { ja } from 'date-fns/locale';

// 日付を指定フォーマットで表示
export const formatDate = (date: string | Date, formatString: string = 'yyyy年MM月dd日'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, formatString, { locale: ja });
};

// ISO形式の日付文字列を取得
export const toISODate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

// 文字列をDateオブジェクトに変換
export const parseDate = (dateString: string): Date => {
  return parseISO(dateString);
};

// テストまでの残り日数を計算
export const getDaysUntilTest = (testDate: string): number => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const test = parseISO(testDate);
  return differenceInDays(test, today);
};

// テストまでの残り日数をフォーマットして返す
export const formatDaysUntilTest = (testDate: string): string => {
  const days = getDaysUntilTest(testDate);

  if (days < 0) {
    return 'テスト終了';
  } else if (days === 0) {
    return '本日がテスト';
  } else if (days === 1) {
    return '明日がテスト';
  } else {
    return `${days}日後`;
  }
};

// 週の開始日と終了日を取得
export const getWeekRange = (date: Date = new Date()) => {
  const weekStart = startOfWeek(date, { weekStartsOn: 1 }); // 月曜が週の開始
  const weekEnd = endOfWeek(date, { weekStartsOn: 1 });

  return {
    start: toISODate(weekStart),
    end: toISODate(weekEnd),
    startDate: weekStart,
    endDate: weekEnd,
  };
};

// 日付がある週に属するかを判定
export const isInWeek = (date: string, weekStart: Date, weekEnd: Date): boolean => {
  const dateObj = parseISO(date);
  return dateObj >= weekStart && dateObj <= weekEnd;
};

// 本日の日付を取得
export const getToday = (): string => {
  return toISODate(new Date());
};

// 日付が本日かを判定
export const isToday = (dateString: string): boolean => {
  return dateString === getToday();
};

// 日付が過去かを判定
export const isPastDate = (dateString: string): boolean => {
  const date = parseISO(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

// 日付が未来かを判定
export const isFutureDate = (dateString: string): boolean => {
  const date = parseISO(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date > today;
};
