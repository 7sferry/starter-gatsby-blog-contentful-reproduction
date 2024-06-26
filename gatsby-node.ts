/************************
 * Author: [MR FERRY™]  *
 * September 2020       *
 ************************/

import path from 'path'
import { AllContentfulBlogPost } from './src/types/DataTypes'
import type { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = ({ graphql, actions, reporter }: any) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
          {
              allContentfulContentTypeBlogPost {
                  nodes {
                      tags
                      slug
                  }
              }
          }
      `).then((result: { errors: any; data: AllContentfulBlogPost }) => {
        if (result.errors) {
          console.log('errors: ' + result.errors)
          reject(result.errors)
          reporter.panicOnBuild(`There was an error loading your Contentful posts`, result.errors)
          return
        }

        // createSlice({
        //   id: `Header`,
        //   component: path.resolve(`./src/components/header/Header.tsx`),
        // });

        // createSlice({
        //   id: `MobileBio`,
        //   component: path.resolve(`./src/components/header/MobileBio.tsx`),
        // });
        //
        // createSlice({
        //   id: `LeftSidebar`,
        //   component: path.resolve(`./src/components/sidebar/LeftSidebar.tsx`),
        // });
        //
        // createSlice({
        //   id: `RightSidebar`,
        //   component: path.resolve(`./src/components/sidebar/RightSidebar.tsx`),
        // });
        //
        // createSlice({
        //   id: `Comment`,
        //   component: path.resolve(`./src/components/Comment.tsx`),
        // });
        // //
        // createSlice({
        //   id: `PaginationElement`,
        //   component: path.resolve(`./src/components/PaginationElement.tsx`),
        // });

        // const postSizeByTag = new Map<string, number>()
        const {
          allContentfulContentTypeBlogPost: { nodes: posts },
        } = result.data

        posts.forEach((node) => {
          // node.tags &&
          //   node.tags.forEach((tag) => {
          //     let tagCount = postSizeByTag.get(tag);
          //     postSizeByTag.set(tag, tagCount ? tagCount + 1 : 1);
          //   });

          let defer = node.slug.toLowerCase().startsWith('t')
          if (defer) {
            console.log(node.slug)
          }
          createPage({
            path: `/blog/${node.slug}`,
            component: path.resolve('./src/templates/blog-post.tsx'),
            context: {
              slug: node.slug,
            },
            defer: defer,
          })
        })

        const postsPerPage = 10
        // const numPages = Math.ceil(posts.length / postsPerPage);
        Array.from({ length: 1 }).forEach((_value, i) => {
          createPage({
            path: `/${i === 0 ? '' : 'page/' + (i + 1)}`,
            component: path.resolve('./src/templates/index.tsx'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
            },
          })
        })

        // postSizeByTag.forEach((size, tag) => {
        //   const kebabTag = kebabCase(tag);
        //   const numTags = Math.ceil(size / postsPerPage);
        //   Array.from({ length: numTags }).forEach((value, i) => {
        //     createPage({
        //       path: `/tags/${kebabTag}${i === 0 ? `` : `/${i + 1}`}`,
        //       component: path.resolve("./src/templates/index.tsx"),
        //       context: {
        //         tag: tag,
        //         kebabTag: kebabTag,
        //         limit: postsPerPage,
        //         skip: i * postsPerPage,
        //       },
        //     });
        //   });
        // });

        // createPage({
        //   path: `/archive`,
        //   component: path.resolve("./src/templates/archive.tsx"),
        // });

        // createRedirect({
        //   fromPath: `/blog/download-gatsby-blog-starters-and-contentful-cms-template`,
        //   toPath: `/blog/migrasi-blog-ke-gatsby`,
        //   redirectInBrowser: true,
        //   isPermanent: true,
        // });
        //
        // createRedirect({
        //   fromPath: `/blog/orang-padang-vs-orang-minangkabau`,
        //   toPath: `/blog/fakta-unik-minangkabau`,
        //   redirectInBrowser: true,
        //   statusCode: 301,
        // });
        //
        // createRedirect({
        //   fromPath: `/blog/t-e-r-c-o-l-o-n-g`,
        //   toPath: `/blog/tercolong`,
        //   redirectInBrowser: true,
        //   isPermanent: true,
        // });
        //
        // createRedirect({
        //   fromPath: `/blog/acid-pada-database-consistency`,
        //   toPath: `/blog/acid-pada-database#consistency`,
        //   redirectInBrowser: true,
        //   isPermanent: true,
        // });
        //
        // createRedirect({
        //   fromPath: `/blog/acid-pada-database-atomicity`,
        //   toPath: `/blog/acid-pada-database#atomicity`,
        //   redirectInBrowser: true,
        //   isPermanent: true,
        // });
        //
        // createRedirect({
        //   fromPath: `/blog/acid-pada-database-durability`,
        //   toPath: `/blog/acid-pada-database#durability`,
        //   redirectInBrowser: true,
        //   isPermanent: true,
        // });
        //
        // createRedirect({
        //   fromPath: `/blog/normalisasi-database`,
        //   toPath: `/blog/contoh-normalisasi-database`,
        //   redirectInBrowser: true,
        //   isPermanent: true,
        // });
        //
        // createRedirect({
        //   fromPath: `/blog/value-averaging-calculator`,
        //   toPath: `/features/value-averaging-calculator`,
        //   redirectInBrowser: true,
        //   isPermanent: true,
        // });
        //
        // createRedirect({
        //   fromPath: `/blog/fakta-unik-minangkabau-part-ii`,
        //   toPath: `/blog/fakta-unik-tentang-minangkabau-part-ii`,
        //   redirectInBrowser: true,
        //   isPermanent: true,
        // });
      }),
    )
  })
}
