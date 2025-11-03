module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 타입 제한: 9가지만 허용
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 새로운 기능
        'fix',      // 버그 수정
        'docs',     // 문서 수정
        'refactor', // 리팩토링
        'test',     // 테스트 코드 추가/수정
        'style',    // 코드 포맷팅 (기능 영향 없음)
        'chore',    // 빌드업무, 패키지매니저 설정
        'perf',     // 성능 개선
        'ci'        // CI/CD 설정 변경
      ]
    ],

    // 제목 (Subject) 규칙
    'subject-max-length': [2, 'always', 50],      // 최대 50자
    'subject-case': [2, 'always', 'lower-case'],  // 소문자로 시작
    'subject-full-stop': [2, 'never', '.'],       // 마침표 금지
    'subject-empty': [2, 'never'],                // 필수 작성

    // 본문 (Body) 규칙
    'body-max-line-length': [2, 'always', 72],    // 최대 72자

    // 타입 규칙
    'type-case': [2, 'always', 'lower-case'],     // 소문자만
    'type-empty': [2, 'never'],                   // 필수 작성

    // Header 규칙
    'header-max-length': [2, 'always', 100]       // 전체 헤더 최대 100자
  }
};
