import type { Preview } from "@storybook/react";
import { ThemeProvider, Theme } from "@emotion/react";

const theme: Theme = {}; // 빈 테마를 올바른 타입으로 선언

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
