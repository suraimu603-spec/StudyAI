/**
 * 定数定義
 */

// アプリ名
export const APP_NAME = 'StudyAI';
export const APP_DESCRIPTION = '高校生向けAI勉強管理Webアプリ';

// 勉強時間の制限
export const MIN_DAILY_STUDY_HOURS = 30; // 最小: 30分
export const MAX_DAILY_STUDY_HOURS = 480; // 最大: 8時間
export const DEFAULT_DAILY_STUDY_HOURS = 180; // デフォルト: 3時間

// テスト関連
export const MIN_SCORE = 0;
export const MAX_SCORE = 100;

// 優先度
export const PRIORITY_LEVELS = {
  high: '高',
  medium: '中',
  low: '低',
} as const;

// 色定義
export const SUBJECT_COLORS = [
  '#3B82F6', // 青
  '#EF4444', // 赤
  '#10B981', // 緑
  '#F59E0B', // 黄
  '#8B5CF6', // 紫
  '#EC4899', // ピンク
  '#14B8A6', // ティール
  '#F97316', // オレンジ
];

// 日付フォーマット
export const DATE_FORMAT = 'yyyy-MM-dd';
export const DISPLAY_DATE_FORMAT = 'yyyy年MM月dd日';

// ナビゲーション
export const NAVIGATION_ITEMS = [
  {
    label: 'ホーム',
    href: '/dashboard',
    icon: '🏠',
  },
  {
    label: 'テスト管理',
    href: '/tests',
    icon: '📋',
  },
  {
    label: '勉強計画',
    href: '/study-plan',
    icon: '📅',
  },
  {
    label: '今日の勉強',
    href: '/today',
    icon: '📖',
  },
  {
    label: '進捗',
    href: '/progress',
    icon: '📊',
  },
  {
    label: '設定',
    href: '/settings',
    icon: '⚙️',
  },
];

// エラーメッセージ
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: '必須項目です',
  INVALID_EMAIL: '有効なメールアドレスを入力してください',
  PASSWORD_TOO_SHORT: 'パスワードは6文字以上である必要があります',
  PASSWORDS_DO_NOT_MATCH: 'パスワードが一致しません',
  INVALID_DATE: '有効な日付を入力してください',
  INVALID_SCORE: `点数は${MIN_SCORE}から${MAX_SCORE}の間である必要があります`,
  INVALID_STUDY_HOURS: `勉強時間は${MIN_DAILY_STUDY_HOURS}から${MAX_DAILY_STUDY_HOURS}分である必要があります`,
  TEST_DATE_IN_PAST: 'テスト日程は未来の日付である必要があります',
  GENERIC_ERROR: 'エラーが発生しました。もう一度お試しください',
} as const;

// 成功メッセージ
export const SUCCESS_MESSAGES = {
  SIGNUP_SUCCESS: 'アカウント作成に成功しました',
  LOGIN_SUCCESS: 'ログインに成功しました',
  LOGOUT_SUCCESS: 'ログアウトしました',
  TEST_CREATED: 'テストを作成しました',
  TEST_UPDATED: 'テストを更新しました',
  TEST_DELETED: 'テストを削除しました',
  PLAN_GENERATED: '勉強計画を作成しました',
  TASK_COMPLETED: 'タスクを完了しました',
  SETTINGS_SAVED: '設定を保存しました',
} as const;
