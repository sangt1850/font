// src/styles/theme.ts
export const theme = {
  colors: {
    border: {
      default: '#E5E7EB',
      soft: 'rgba(0,0,0,0.05)',
      strong: '#D1D5DB',
    },
    bg: {
      sidebar: '#F9FAFB',
      hover: '#F3F4F6',
    },
    text: {
      primary: '#111827',
      secondary: '#6B7280',
    }
  }
}

export type ThemeType = typeof theme
