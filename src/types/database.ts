/**
 * データベース関連の型定義
 */

// ユーザー情報
export interface User {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
}

// ユーザー設定
export interface UserSettings {
  id: string;
  user_id: string;
  daily_study_hours: number; // 1日の勉強可能時間（分）
  updated_at: string;
}

// 科目
export interface Subject {
  id: string;
  user_id: string;
  name: string; // 例: 数学, 英語
  color: string; // UI用カラーコード
  created_at: string;
}

// テスト
export interface Test {
  id: string;
  user_id: string;
  subject_id: string;
  test_name: string;
  test_date: string; // YYYY-MM-DD
  target_score: number;
  current_score: number;
  weak_areas: string[]; // 苦手分野の配列
  created_at: string;
  updated_at: string;
}

// 勉強計画
export interface StudyPlan {
  id: string;
  user_id: string;
  test_id: string;
  generated_at: string;
  plan_data: StudyPlanData;
  is_active: boolean;
  created_at: string;
}

// 勉強計画の詳細データ
export interface StudyPlanData {
  test_id: string;
  test_name: string;
  test_date: string;
  total_days: number;
  daily_study_minutes: number;
  schedule: {
    date: string;
    tasks: {
      subject: string;
      topic: string;
      duration_minutes: number;
      priority: 'high' | 'medium' | 'low';
    }[];
  }[];
}

// 勉強タスク
export interface StudyTask {
  id: string;
  user_id: string;
  test_id: string;
  subject_id: string;
  task_name: string;
  scheduled_date: string; // YYYY-MM-DD
  planned_minutes: number;
  is_completed: boolean;
  completed_at: string | null;
  created_at: string;
}

// 勉強セッション（実績記録）
export interface StudySession {
  id: string;
  user_id: string;
  task_id: string;
  study_date: string; // YYYY-MM-DD
  duration_minutes: number;
  created_at: string;
}

// データベース型（Supabase用）
export interface Database {
  public: {
    Tables: {
      users: {
        Row: User;
        Insert: Omit<User, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<User, 'id' | 'created_at'>>;
      };
      user_settings: {
        Row: UserSettings;
        Insert: Omit<UserSettings, 'id' | 'updated_at'>;
        Update: Partial<Omit<UserSettings, 'id'>>;
      };
      subjects: {
        Row: Subject;
        Insert: Omit<Subject, 'id' | 'created_at'>;
        Update: Partial<Omit<Subject, 'id' | 'created_at'>>;
      };
      tests: {
        Row: Test;
        Insert: Omit<Test, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Test, 'id' | 'created_at'>>;
      };
      study_plans: {
        Row: StudyPlan;
        Insert: Omit<StudyPlan, 'id' | 'created_at'>;
        Update: Partial<Omit<StudyPlan, 'id' | 'created_at'>>;
      };
      study_tasks: {
        Row: StudyTask;
        Insert: Omit<StudyTask, 'id' | 'created_at'>;
        Update: Partial<Omit<StudyTask, 'id' | 'created_at'>>;
      };
      study_sessions: {
        Row: StudySession;
        Insert: Omit<StudySession, 'id' | 'created_at'>;
        Update: Partial<Omit<StudySession, 'id' | 'created_at'>>;
      };
    };
  };
}
