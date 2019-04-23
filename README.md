# feeka-theme

# Quickstart Install

If you want to run your own instance of Ghost, in most cases the best way is to use our **CLI tool**

```
$ npm install ghost-cli -g
```

Then, if installing locally add the `local` flag to get up and running in under a minute - [Local install docs](https://docs.ghost.org/install/local)

```
$ ghost install local
```

## ⚠️ Important ⚠️

After instalation clone this repository to content -> themes and run `ghost restart` to start seeing the **feeka-theme** in http://localhost:2368/ghost/#/settings/design.

<hr>

Check out our [official documentation](https://docs.ghost.org) for more information about our [recommended hosting stack](https://docs.ghost.org/concepts/hosting) & properly [upgrading Ghost](https://docs.ghost.org/docs/upgrade), plus everything you need to develop your own Ghost [themes](https://docs.ghost.org/api/handlebars-themes) or work with [our API](https://api.ghost.org/docs).


# First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

We've documented our default theme pretty heavily so that it should be fairly easy to work out what's going on just by reading the code and the comments. Once you feel comfortable with how everything works, we also have full [theme API documentation](https://themes.ghost.org) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives
- `author.hbs` - Used for author archives

One really neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive


# Development

Casper styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
$ yarn install
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

# Deployment

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
$ yarn zip
```

# SVG Icons

Casper uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.