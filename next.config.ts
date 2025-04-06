import type { NextConfig } from 'next';

const nextConfig = {
  output: 'export', // 정적 HTML 생성을 위한 설정
  images: {
    unoptimized: true, // GitHub Pages에서는 Next.js의 이미지 최적화를 사용할 수 없음
  },
  // 레포지토리 이름이 'my-nextjs-project'이라면 다음과 같이 baseUrl 설정 필요
  basePath: process.env.NODE_ENV === 'production' ? '/my-nextjs-project' : '',
};

module.exports = nextConfig;
