/**
 * ルートレイアウト
 */

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StudyAI - AI勉強管理アプリ',
  description: 'テストの日程と目標を入力すると、AIが最適な勉強計画を作成します。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
