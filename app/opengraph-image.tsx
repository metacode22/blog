import { ImageResponse } from 'next/og';

export const alt = '신승준 블로그';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#111010',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: 'white',
            letterSpacing: -2,
          }}
        >
          신승준 블로그
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#9ca3af',
          }}
        >
          프론트엔드 개발자 신승준의 기술 블로그
        </div>
        <div
          style={{
            fontSize: 20,
            color: '#6b7280',
            marginTop: 16,
          }}
        >
          metacode22.xyz
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
