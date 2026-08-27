/**
 * API関連の型定義
 */

// 認証関連
export interface AuthResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
  };
  error?: string;
}

// API汎用レスポンス
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// テスト登録フォーム
export interface CreateTestRequest {
  subject_id: string;
  test_name: string;
  test_date: string; // YYYY-MM-DD
  target_score: number;
  current_score: number;
  weak_areas: string[];
}

// 勉強計画生成リクエスト
export interface GenerateStudyPlanRequest {
  test_id: string;
}

// 勉強計画生成レスポンス
export interface GenerateStudyPlanResponse {
  success: boolean;
  plan_id?: string;
  plan_data?: any;
  error?: string;
}

// タスク完了リクエスト
export interface CompleteTaskRequest {
  task_id: string;
  duration_minutes: number;
}

// 週間統計
export interface WeeklyStats {
  total_minutes: number;
  days_studied: number;
  by_subject: {
    [subject_name: string]: number;
  };
  date_range: {
    start: string;
    end: string;
  };
}
