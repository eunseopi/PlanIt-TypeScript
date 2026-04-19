# PlanIt TS 마이그레이션 메모

## 이번에 반영한 내용
- `src` 아래 `js/jsx` 파일을 전부 `tsx` 기반으로 변환
- 로컬 import 의 `.js/.jsx` 확장자 제거
- `tsconfig.json`, `vite-env.d.ts`, 전역 asset/module declaration 추가
- `src/app/providers`, `src/app/router`, `src/app/store` 구조 추가
- `main`에서 Provider/Router/AuthProvider 조합을 `AppProviders`로 분리
- Redux store 타입(`RootState`, `AppDispatch`) 추가
- 아래 기존 버그 수정
  - `api/config`: request interceptor에서 `config`를 반환하지 않던 문제
  - `chatSlice`: `setMesasges` 오타로 인해 액션 export가 어긋나던 문제
  - `StoragePostsSlice`: 배열 상태인데 `state.savedPosts`를 참조하던 문제

## 추천 다음 단계
1. `contexts`의 전역 UI 상태는 Context 일부를 `zustand`로 분리
2. API 데이터는 `TanStack Query`로 이전
3. `components/units`를 `features`, `entities`, `widgets` 중심으로 재배치
4. 공통 타입을 `src/shared/types`로 모으기
5. `@typescript-eslint` 설정 추가 후 `strict` 단계적 강화

## 주의
- 현재 변환은 “전체 JS → TSX 전환 + 기본 타입 안전장치 추가” 중심의 1차 작업임
- 실제 서비스 기준으로는 컴포넌트 props, API 응답, dummy data 타입을 더 촘촘하게 정리하는 2차 타입 작업이 필요함
- 로컬 환경에서 `npm install` 후 `npm run typecheck`, `npm run build`로 재검증 권장
