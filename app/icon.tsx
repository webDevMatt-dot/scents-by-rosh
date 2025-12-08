import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // This HTML/CSS defines your logo
      <div
        style={{
          fontSize: 20,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#c9a449', // Your Gold Color
          borderRadius: '50%', // Circle shape
          border: '1px solid #333',
          fontFamily: 'serif', // Matches your website font
          fontWeight: 'bold',
        }}
      >
        S
      </div>
    ),
    { ...size }
  )
}