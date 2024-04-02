export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "不是老五",
  /** your name */
  author: "Jackey",
  /** website description */
  desc: "彩笔前端的🌶︎🐔记录",
  /** your deployed domain */
  website: "https://byl-319.top",
  /** your locale */
  locale: "zh-cn",
  /** theme style */
  themeStyle: "dark",
  /** your socials */
  socials: [
    // {
    //   name: "github",
    //   href: "https://github.com/ylLin611",
    // },
    // {
    //   name: "rss",
    //   href: "/atom.xml",
    // },
    // {
    //   name: "twitter",
    //   href: "https://github.com/moeyua/astro-theme-typography",
    // },
    // {
    //   name: "mastodon",
    //   href: "https://github.com/moeyua/astro-theme-typography",
    // }
  ],
  /** your header info */
  header: {
    twitter: "@moeyua13",
  },
  /** your navigation links */
  navs: [
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Categories",
      href: "/categories"
    },
    {
      name: "About",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    {name: "胡适", path: "hu-shi"},
  ]
}

