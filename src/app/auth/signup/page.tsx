/**
 * サインアップページ
 */

import { SignupForm } from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* ロゴ・タイトル */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">StudyAI</h1>
          <p className="text-green-100">AI勉強管理アプリ</p>
        </div>

        {/* サインアップフォーム */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-center">新規登録</h2>
          <SignupForm />
        </div>

        {/* フッター */}
        <div className="text-center mt-6 text-green-100 text-sm">
          <p>無料でアカウント作成できます</p>
        </div>
      </div>
    </div>
  );
}
