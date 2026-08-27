/**
 * フォーム入力値のバリデーション関数
 */

import { ERROR_MESSAGES } from './constants';

// メールアドレスの正規表現
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 日付の正規表現（YYYY-MM-DD）
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

export interface ValidationError {
  field: string;
  message: string;
}

// 必須項目チェック
export const validateRequired = (value: any, fieldName: string): ValidationError | null => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return {
      field: fieldName,
      message: ERROR_MESSAGES.REQUIRED_FIELD,
    };
  }
  return null;
};

// メールアドレスバリデーション
export const validateEmail = (email: string): ValidationError | null => {
  const error = validateRequired(email, 'email');
  if (error) return error;

  if (!EMAIL_REGEX.test(email)) {
    return {
      field: 'email',
      message: ERROR_MESSAGES.INVALID_EMAIL,
    };
  }
  return null;
};

// パスワードバリデーション
export const validatePassword = (password: string): ValidationError | null => {
  const error = validateRequired(password, 'password');
  if (error) return error;

  if (password.length < 6) {
    return {
      field: 'password',
      message: ERROR_MESSAGES.PASSWORD_TOO_SHORT,
    };
  }
  return null;
};

// パスワード一致確認
export const validatePasswordMatch = (
  password: string,
  confirmPassword: string
): ValidationError | null => {
  if (password !== confirmPassword) {
    return {
      field: 'confirmPassword',
      message: ERROR_MESSAGES.PASSWORDS_DO_NOT_MATCH,
    };
  }
  return null;
};

// 日付バリデーション
export const validateDate = (date: string): ValidationError | null => {
  const error = validateRequired(date, 'date');
  if (error) return error;

  if (!DATE_REGEX.test(date)) {
    return {
      field: 'date',
      message: ERROR_MESSAGES.INVALID_DATE,
    };
  }

  const inputDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (inputDate < today) {
    return {
      field: 'date',
      message: ERROR_MESSAGES.TEST_DATE_IN_PAST,
    };
  }

  return null;
};

// スコアバリデーション
export const validateScore = (
  score: number,
  min: number = 0,
  max: number = 100
): ValidationError | null => {
  if (score === null || score === undefined) {
    return {
      field: 'score',
      message: ERROR_MESSAGES.REQUIRED_FIELD,
    };
  }

  if (isNaN(score) || score < min || score > max) {
    return {
      field: 'score',
      message: ERROR_MESSAGES.INVALID_SCORE,
    };
  }
  return null;
};

// 勉強時間バリデーション（分単位）
export const validateStudyHours = (minutes: number): ValidationError | null => {
  const { MIN_DAILY_STUDY_HOURS, MAX_DAILY_STUDY_HOURS } = require('./constants');

  if (minutes === null || minutes === undefined) {
    return {
      field: 'daily_study_hours',
      message: ERROR_MESSAGES.REQUIRED_FIELD,
    };
  }

  if (isNaN(minutes) || minutes < MIN_DAILY_STUDY_HOURS || minutes > MAX_DAILY_STUDY_HOURS) {
    return {
      field: 'daily_study_hours',
      message: ERROR_MESSAGES.INVALID_STUDY_HOURS,
    };
  }
  return null;
};

// テスト登録フォームのバリデーション
export const validateTestForm = (formData: {
  test_name?: string;
  test_date?: string;
  target_score?: number;
  current_score?: number;
}): ValidationError[] => {
  const errors: ValidationError[] = [];

  // テスト名
  const testNameError = validateRequired(formData.test_name, 'test_name');
  if (testNameError) errors.push(testNameError);

  // テスト日程
  const testDateError = validateDate(formData.test_date || '');
  if (testDateError) errors.push(testDateError);

  // 目標点
  const targetScoreError = validateScore(formData.target_score || 0);
  if (targetScoreError) errors.push(targetScoreError);

  // 現在の点数
  const currentScoreError = validateScore(formData.current_score || 0);
  if (currentScoreError) errors.push(currentScoreError);

  return errors;
};

// サインアップフォームのバリデーション
export const validateSignupForm = (formData: {
  email?: string;
  password?: string;
  confirmPassword?: string;
}): ValidationError[] => {
  const errors: ValidationError[] = [];

  const emailError = validateEmail(formData.email || '');
  if (emailError) errors.push(emailError);

  const passwordError = validatePassword(formData.password || '');
  if (passwordError) errors.push(passwordError);

  const passwordMatchError = validatePasswordMatch(formData.password || '', formData.confirmPassword || '');
  if (passwordMatchError) errors.push(passwordMatchError);

  return errors;
};
