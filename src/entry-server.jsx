import { HelmetProvider } from 'react-helmet-async';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './app';
import { jsx } from 'react/jsx-runtime';
export const render = (url) => {
  const helmetContext = {};
  const html = renderToString(
    /* @__PURE__ */ jsx(HelmetProvider, {
      context: helmetContext,
      children: /* @__PURE__ */ jsx(StaticRouter, {
        location: url,
        children: /* @__PURE__ */ jsx(App, {})
      })
    })
  );

  const { helmet } = helmetContext; // Extract helmet context for SEO
  
  return {
    html,
    helmet: {
      title: helmet.title.toString(),
      meta: helmet.meta.toString(),
      // Add other helmet tags if necessary
    },
  };
};
