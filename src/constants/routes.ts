export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SO_DAU_BAI: '/so-dau-bai',
  THONG_KE_BAO_CAO: '/thong-ke-bao-cao',
  QUAN_LY_HOC_TAP: '/quan-ly-hoc-tap',
  HOC_SINH: '/hoc-sinh',
  QUAN_TRI_THONG_TIN: '/quan-tri-thong-tin',
} as const;

// Settings menu configuration
export const settingsMenu = {
  profile: {
    label: 'Thông tin cá nhân',
    path: ROUTES.PROFILE,
  },
  signOut: {
    label: 'Đăng xuất',
    path: ROUTES.LOGIN,
  },
};
